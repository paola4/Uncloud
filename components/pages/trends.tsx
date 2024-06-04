import React, { useEffect, useState, useRef } from 'react';
import TrendLineChart, { singleMood } from '../home/trendLineChart';
import HeatMap from '../home/heatMapChart';
import { getUser } from '../utils/serverFunctions';
import { useAuth } from '@/app/context/UserProvider';
import { prepareHeatMapData } from '../utils/textProcessing';
import PercentageCard from '../trends/percentageCard';
import { Tooltip, useTooltip } from '@visx/tooltip';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';
import { Question } from '@phosphor-icons/react';
import '/app/styles/trends.css';
import { MoodEntry } from '../home/calendar';
import {
	calculatePastDateRange,
	calculatePercentageIncrease,
	countNonEmptyReflections,
	countNonEmptyWins,
	filterFavoritesByDateRange,
	filterMoodsByDateRange,
} from './trendsUtils';

const Trends = () => {
	const { user, isUpdated } = useAuth();
	const [moods, setMoods] = useState<MoodEntry[]>([]);
	const [currentCountMoods, setCurrentCountMoods] = useState<number>(0);
	const [heatMapData, setHeatMapData] = useState<any[]>([]);

	// Tooltip state
	const { tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip } =
		useTooltip<React.ReactNode>();

	const [percentageIncreaseMoods, setPercentageIncreaseMoods] =
		useState<number>(0);
	const [currentCountFavorites, setCurrentCountFavorites] = useState<number>(0);

	const [percentageIncreaseFavorites, setPercentageIncreaseFavorites] =
		useState<number>(0);
	const [currentCountWins, setCurrentCountWins] = useState<number>(0);

	const [percentageIncreaseWins, setPercentageIncreaseWins] =
		useState<number>(0);
	const [currentCountReflections, setCurrentCountReflections] =
		useState<number>(0);

	const [percentageIncreaseReflections, setPercentageIncreaseReflections] =
		useState<number>(0);
	const [currentStartDate, setCurrentStartDate] =
		useState<string>('2024-05-03');
	const [currentEndDate, setCurrentEndDate] = useState<string>('2024-06-03');

	useEffect(() => {
		const currentStart = new Date(currentStartDate);
		const currentEnd = new Date(currentEndDate);
		const { pastStartDate, pastEndDate } = calculatePastDateRange(
			currentStart,
			currentEnd
		);

		const currentMoods = filterMoodsByDateRange(
			moods,
			currentStart,
			currentEnd
		);
		const pastMoods = filterMoodsByDateRange(moods, pastStartDate, pastEndDate);
		console.log(currentMoods);
		const currentMoodCount = currentMoods.length;
		const pastMoodCount = pastMoods.length;

		setCurrentCountMoods(currentMoodCount);

		setPercentageIncreaseMoods(
			calculatePercentageIncrease(currentMoodCount, pastMoodCount)
		);

		const currentFavorites = filterFavoritesByDateRange(currentMoods);
		const pastFavorites = filterFavoritesByDateRange(pastMoods);

		const currentFavoriteCount = currentFavorites.length;
		const pastFavoriteCount = pastFavorites.length;

		setCurrentCountFavorites(currentFavoriteCount);

		setPercentageIncreaseFavorites(
			calculatePercentageIncrease(currentFavoriteCount, pastFavoriteCount)
		);
		const currentReflectionCount = countNonEmptyReflections(currentMoods);
		const pastReflectionCount = countNonEmptyReflections(pastMoods);

		setCurrentCountReflections(currentReflectionCount);

		setPercentageIncreaseReflections(
			calculatePercentageIncrease(currentReflectionCount, pastReflectionCount)
		);
		const currentWinCount = countNonEmptyWins(currentMoods);
		const pastWinCount = countNonEmptyWins(pastMoods);

		setCurrentCountWins(currentWinCount);

		setPercentageIncreaseWins(
			calculatePercentageIncrease(currentWinCount, pastWinCount)
		);
	}, [moods, currentStartDate, currentEndDate]);
	console.log(currentCountMoods);
	useEffect(() => {
		if (user) {
			getUser(user.uid);
		}
	}, [user, isUpdated]);

	// Create separate references for each question mark
	const questionMarkRefs = {
		moodFlow: useRef<HTMLDivElement>(null),
		frequentWords: useRef<HTMLDivElement>(null),
	};

	useEffect(() => {
		if (user) {
			getUser(user.uid).then((userData) => {
				if (userData && userData.moods) {
					setMoods(userData.moods);
					const heatmapData = prepareHeatMapData(userData.moods);
					setHeatMapData(heatmapData);
				}
			});
		}
	}, [user, isUpdated]);

	const handleMouseEnter = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		message: string,
		refKey: 'moodFlow' | 'frequentWords'
	) => {
		const targetRect =
			questionMarkRefs[refKey].current?.getBoundingClientRect();
		if (targetRect) {
			showTooltip({
				tooltipData: message,
				tooltipLeft: targetRect.left + targetRect.width / 2,
				tooltipTop: targetRect.bottom + window.scrollY, // Adjust as needed
			});
		}
	};

	return (
		<div className='flex flex-col gap-5'>
			<div className='mb-4 grid grid-cols-2 gap-4 md:grid-cols-4'>
				<PercentageCard
					count={currentCountMoods}
					percentage={Math.abs(percentageIncreaseMoods).toFixed(2)}
					isNegative={percentageIncreaseMoods < 0}
					icon={'/cloudtrend.svg'}
					description={'Total logs'}
					growthArrow={
						percentageIncreaseMoods < 0 ? (
							<FaArrowTrendDown className='text-blueColor' size={24} />
						) : (
							<FaArrowTrendUp className='text-blueColor' size={24} />
						)
					}
				/>
				<PercentageCard
					count={currentCountFavorites}
					percentage={Math.abs(percentageIncreaseFavorites).toFixed(2)}
					isNegative={percentageIncreaseFavorites < 0}
					icon={'/favorite.svg'}
					description={'Total favorited'}
					growthArrow={
						percentageIncreaseFavorites < 0 ? (
							<FaArrowTrendDown className='text-[#FE5B90]' size={24} />
						) : (
							<FaArrowTrendUp className='text-[#FE5B90]' size={24} />
						)
					}
				/>
				<PercentageCard
					count={currentCountReflections}
					percentage={Math.abs(percentageIncreaseReflections).toFixed(2)}
					isNegative={percentageIncreaseReflections < 0}
					icon={'/reflections.svg'}
					description={'Total reflection prompts'}
					growthArrow={
						percentageIncreaseReflections < 0 ? (
							<FaArrowTrendDown className='text-[#68DAB8]' size={24} />
						) : (
							<FaArrowTrendUp className='text-[#68DAB8]' size={24} />
						)
					}
				/>
				<PercentageCard
					count={currentCountWins}
					percentage={Math.abs(percentageIncreaseWins).toFixed(2)}
					isNegative={percentageIncreaseWins < 0}
					icon={'/wins.svg'}
					description={'Total wins'}
					growthArrow={
						percentageIncreaseWins < 0 ? (
							<FaArrowTrendDown className='text-[#FE8034]' size={24} />
						) : (
							<FaArrowTrendUp className='text-[#FE8034]' size={24} />
						)
					}
				/>
			</div>
			<div className='grid h-fit w-full gap-5 md:grid-cols-2'>
				<div className='trends-card gap-12'>
					{moods && moods.length > 0 && (
						<>
							<div className='flex w-full flex-row items-center justify-between'>
								<span className='h-[2.0625rem] text-2xl font-semibold leading-normal'>
									Mood Flow
								</span>
								<div
									ref={questionMarkRefs.moodFlow}
									className='relative flex max-h-[1.5rem] items-center justify-center'
									onMouseEnter={(event) =>
										handleMouseEnter(
											event,
											'This chart shows the flow of your moods over time.',
											'moodFlow'
										)
									}
									onMouseLeave={hideTooltip}
								>
									<Question size={24} color={'#706F6F'} />
								</div>
							</div>
							<TrendLineChart moods={moods} />
						</>
					)}
				</div>
				<div className='trends-card gap-4'>
					{heatMapData.length > 0 && (
						<>
							<div className='flex w-full flex-row items-center justify-between'>
								<span className='h-[2.0625rem] text-2xl font-semibold leading-normal'>
									Frequent Words
								</span>
								<div
									ref={questionMarkRefs.frequentWords}
									className='relative flex max-h-[1.5rem] items-center justify-center'
									onMouseEnter={(event) =>
										handleMouseEnter(
											event,
											'This chart shows the most frequently used words in your entries.',
											'frequentWords'
										)
									}
									onMouseLeave={hideTooltip}
								>
									<Question size={24} color={'#706F6F'} />
								</div>
							</div>
							<HeatMap data={heatMapData} />
						</>
					)}
				</div>
			</div>
			{tooltipData && (
				<Tooltip
					left={tooltipLeft}
					top={tooltipTop}
					style={{
						position: 'absolute',
						backgroundColor: 'white',
						color: 'black',
						border: '1px solid black',
						borderRadius: '4px',
						padding: '8px',
						fontSize: '12px',
						pointerEvents: 'none',
						transform: 'translate(-100%, 0)',
						width: '10rem',
					}}
				>
					{tooltipData}
				</Tooltip>
			)}
		</div>
	);
};

export default Trends;
