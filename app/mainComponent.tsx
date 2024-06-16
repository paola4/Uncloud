import { useAuth } from '@/app/context/UserProvider';
import { useEffect, useState, useCallback } from 'react';
import { getUser, updateUser } from '@/components/utils/serverFunctions';
import { Value } from '@/components/home/calendar';
import FAQ from '@/components/pages/faq';
import Goals from '@/components/pages/goals';
import Trends from '@/components/pages/trends';
import Favorites from '@/components/pages/favorites';
import CalendarView from '@/components/home/calendar';
import Userbar from '@/components/shared/userbar';
import Leftbar from '@/components/shared/leftbar';
import Rightbar from '@/components/shared/rightbar';
import LogSummary from '@/components/shared/logSummary';
import MiniCalendarView from '@/components/shared/miniCalendar';
import LogSummaryList from '@/components/shared/logSummaryList';
import { ReflectionsType } from '@/components/home/newLogPopup';
import { getFavoriteLogs } from '@/components/utils/serverFunctions';
import { Win } from '@/components/home/moodPrompts';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import Profile from '@/components/pages/profile';
import DesktopLayout from '@/components/home/desktopLayout';
import MobileLayout from '@/components/home/mobileLayout';
import Settings from '@/components/pages/settings';
import { Tooltip } from 'react-tooltip';

export default function MainComponent({
	children,
	isConfirmationClosed,
}: Readonly<{
	children?: React.ReactNode;
	isConfirmationClosed: boolean;
}>) {
	const { user } = useAuth();
	const [selectedMenuItem, setSelectedMenuItem] = useState('Calendar');
	const [selectedDate, setSelectedDate] = useState<Value>(new Date());
	const [value, setValue] = useState<Value | null>(new Date());
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [month, setMonth] = useState(new Date().getMonth());
	const [isSummaryList, setIsSummaryList] = useState(true);
	const [isRightBarOpen, setRightBarOpen] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedLog, setSelectedLog] = useState<{
		date: Date;
		mood: string;
		icon: string;
	} | null>(null);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [mobile, setMobile] = useState(window.innerWidth < 768);
	const [isFirstLogin, setIsFirstLogin] = useState(false);
	const [tooltipShake, setTooltipShake] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const [favoriteLogs, setFavoriteLogs] = useState<{
		[date: string]: {
			mood: string;
			reflections: ReflectionsType[];
			favorite: boolean;
		};
	}>({});

	const [profilePageOpen, setProfilePageOpen] = useState(false);

	useEffect(() => {
		const fetchFavoriteLogs = async () => {
			if (user) {
				const favoriteLogs = await getFavoriteLogs(user.uid);
				setFavoriteLogs(favoriteLogs);
			}
		};

		fetchFavoriteLogs();
	}, [user]);

	useEffect(() => {
		if (user) {
			getUser(user.uid).then((userData: any) => {
				if (userData) {
					console.log(
						'isFirstLogin fetched from Firestore:',
						userData.isFirstLogin
					);
					setIsFirstLogin(userData.isFirstLogin);
				}
			});
		}
	}, [user]);

	const handleTooltipClose = async () => {
		setIsFirstLogin(false);
		if (user) {
			await updateUser(user.uid, { isFirstLogin: false });
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const tooltip = document.getElementById('addLogTooltip');
			if (tooltip && !tooltip.contains(event.target as Node)) {
				handleTooltipClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (isFirstLogin && isConfirmationClosed) {
			setTooltipShake(true);
			const timer = setTimeout(() => {
				setTooltipShake(false);
			}, 500); // Duration of the shake animation

			return () => clearTimeout(timer);
		}
	}, [isFirstLogin, isConfirmationClosed]);

	const onFavoriteToggle = (
		logDate: string,
		mood: string,
		reflections: ReflectionsType[]
	): boolean => {
		const newFavorite = !favoriteLogs[logDate]?.favorite;
		setFavoriteLogs((prevFavoriteLogs) => {
			let updatedFavoriteLogs = { ...prevFavoriteLogs };
			if (newFavorite) {
				updatedFavoriteLogs[logDate] = {
					mood,
					reflections,
					favorite: newFavorite,
				};
			} else {
				delete updatedFavoriteLogs[logDate];
			}
			return updatedFavoriteLogs;
		});
		return newFavorite;
	};

	const [rightBarContent, setRightBarContent] = useState<JSX.Element | null>(
		null
	);
	const [rightBarHistory, setRightBarHistory] = useState<JSX.Element[]>([]);

	const handleLogClick = (log: {
		date: Date;
		mood: string;
		icon: string;
		reflections?: ReflectionsType[];
		favorite: boolean;
		wins?: Win[];
	}) => {
		setIsSummaryList(false);
		setRightBarHistory((prevHistory) =>
			rightBarContent ? [...prevHistory, rightBarContent] : prevHistory
		);
		setRightBarContent(
			<LogSummary
				log={{
					...log,
					reflections: log.reflections || [],
					wins: log.wins || [],
				}}
				handleGoBack={handleGoBack}
				onFavoriteToggle={onFavoriteToggle}
				favoriteLogs={favoriteLogs}
			/>
		);
		console.log('Checking date', log.date.toString());

		setRightBarOpen(true);
		console.log('Log clicked:', log);
	};

	const handleRightBarToggle = (open: boolean) => {
		setRightBarOpen(open);
	};

	const handleGoBack = () => {
		setIsSummaryList(true);
		setRightBarContent(null);
	};

	const handlePopupToggle = useCallback(() => {
		setPopupOpen((prev) => !prev);
		console.log('Popup state toggled:', !isPopupOpen);
	}, [isPopupOpen]);

	const handleAddLogClick = useCallback(() => {
		setValue(selectedDate);
		setPopupOpen(true);
	}, [selectedDate]);

	const handleDateChange = (newValue: Value) => {
		setSelectedDate(newValue);
		setValue(newValue);
	};

	let component;
	let title;
	switch (selectedMenuItem) {
		case 'Calendar':
			component = (
				<CalendarView
					month={month}
					setMonth={setMonth}
					handleAddLogClick={handleAddLogClick}
					selectedDate={selectedDate}
					value={value}
					setValue={setValue}
					isPopupOpen={isPopupOpen}
					setPopupOpen={setPopupOpen}
					handleDateChange={handleDateChange}
					handleLogClick={handleLogClick}
					onLoadComplete={() => setIsLoading(false)}
					mobile={mobile}
				/>
			);
			title = 'My Log';
			break;
		case 'FAQ':
			component = <FAQ />;
			title = 'FAQ';
			break;
		case 'Goals':
			component = <Goals />;
			title = 'Goals';
			break;
		case 'Trends':
			component = <Trends />;
			title = 'Overview';
			break;
		case 'Favorites':
			component = (
				<Favorites
					favoriteLogs={favoriteLogs}
					handleLogClick={handleLogClick}
					mobile={mobile}
					month={month}
					setMonth={setMonth}
					selectedDate={selectedDate}
					handleDateChange={handleDateChange}
					onFavoriteToggle={onFavoriteToggle}
					handleGoBack={handleGoBack}
				/>
			);
			title = 'Favorites';
			break;
		case 'Profile':
			component = <Profile mobile={mobile} />;
			title = 'Profile';
			break;
		case 'Settings':
			component = <Settings mobile={mobile} />;
			title = 'Settings';
			break;
		default:
			component = (
				<CalendarView
					month={month}
					setMonth={setMonth}
					handleAddLogClick={handleAddLogClick}
					selectedDate={selectedDate}
					value={value}
					setValue={setValue}
					isPopupOpen={isPopupOpen}
					setPopupOpen={setPopupOpen}
					handleDateChange={handleDateChange}
					handleLogClick={handleLogClick}
					onLoadComplete={() => setIsLoading(false)}
					mobile={mobile}
				/>
			);
			title = 'My Log';
	}

	const [currentPage, setCurrentPage] = useState(1);

	const handlePagination = (value: { selected: number }) => {
		setCurrentPage(value.selected + 1);
	};

	console.log('First login?', isFirstLogin);
	return (
		<>
			{isFirstLogin && isConfirmationClosed && (
				<Tooltip
					id='addLogTooltip'
					place='right'
					isOpen={true}
					clickable={true}
					afterHide={handleTooltipClose}
					opacity={0.95}
					className={tooltipShake ? 'shake-animation' : ''}
					style={{
						backgroundColor: '#2D81E0',
						color: '#fff',
						borderRadius: '0.5rem',
						padding: '1.5rem 1.5rem',
						zIndex: 19,
					}}
				>
					<div className='flex flex-col gap-6'>
						<div className='flex flex-col gap-4'>
							<span className='text-lg font-bold'> Get started here!</span>
							<span>
								Begin logging your moods by clicking <b>Add a log</b>.
							</span>
						</div>
						<div className='flex justify-end'>
							<button
								className='rounded-[6.25rem]  bg-white px-[1.5rem] py-[0.625rem] text-sm font-bold text-[#2d81e0] hover:bg-[#DEE9F5]'
								onClick={handleTooltipClose}
							>
								Got it
							</button>
						</div>
					</div>
				</Tooltip>
			)}
			{windowWidth >= 768 ? (
				<DesktopLayout
					isLoading={isLoading}
					setSelectedMenuItem={setSelectedMenuItem}
					selectedMenuItem={selectedMenuItem}
					handleAddLogClick={handleAddLogClick}
					month={month}
					setMonth={setMonth}
					selectedDate={selectedDate}
					value={value}
					setValue={setValue}
					handleDateChange={handleDateChange}
					handleLogClick={handleLogClick}
					component={component}
					isRightBarOpen={isRightBarOpen}
					handleRightBarToggle={handleRightBarToggle}
					currentPage={currentPage}
					handlePagination={handlePagination}
					isSummaryList={isSummaryList}
					rightBarContent={rightBarContent}
					isPopupOpen={isPopupOpen}
					mobile={mobile}
					title={title}
				/>
			) : (
				<MobileLayout
					isLoading={isLoading}
					setSelectedMenuItem={setSelectedMenuItem}
					selectedMenuItem={selectedMenuItem}
					handleAddLogClick={handleAddLogClick}
					month={month}
					setMonth={setMonth}
					selectedDate={selectedDate}
					value={value}
					setValue={setValue}
					handleDateChange={handleDateChange}
					handleLogClick={handleLogClick}
					component={component}
					isRightBarOpen={isRightBarOpen}
					handleRightBarToggle={handleRightBarToggle}
					currentPage={currentPage}
					handlePagination={handlePagination}
					isSummaryList={isSummaryList}
					rightBarContent={rightBarContent}
					isPopupOpen={isPopupOpen}
					mobile={mobile}
					title={title}
				/>
			)}
		</>
	);
}
