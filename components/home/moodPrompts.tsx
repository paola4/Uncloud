import { Button } from '@/stories/Button';
import { CaretLeft, Plus, Minus } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';
import { ReflectionsType } from './newLogPopup';

type Props = {
	selectedMood: string;
	initialReflections: ReflectionsType[];
	handleSaveMood: (reflections: ReflectionsType[]) => Promise<void>;
};

const MoodPrompts = ({
	selectedMood,
	initialReflections,
	handleSaveMood,
}: Props) => {
	const defaultQuestions = {
		Rainbow: [
			{
				question: 'What made you happy today?',
				answer: '',
			},
			{
				question: 'What are you looking forward to?',
				answer: '',
			},
		],
		Sunny: [
			{
				question: 'What is troubling you?',
				answer: '',
			},
			{
				question: 'How can you improve your mood?',
				answer: '',
			},
		],
		Cloudy: [
			{
				question: 'What is making you excited?',
				answer: '',
			},
			{
				question: 'What are your plans for the day?',
				answer: '',
			},
		],
		Rainy: [
			{
				question: 'What is making you excited?',
				answer: '',
			},
			{
				question: 'What are your plans for the day?',
				answer: '',
			},
		],
		Stormy: [
			{
				question: 'What is making you excited?',
				answer: '',
			},
			{
				question: 'What are your plans for the day?',
				answer: '',
			},
		],
	};

	const [reflections, setReflections] = useState(
		initialReflections.length
			? initialReflections
			: defaultQuestions[selectedMood as keyof typeof defaultQuestions]
	);
	const [openReflections, setOpenReflections] = useState<number[]>([]);

	useEffect(() => {
		if (initialReflections.length === 0) {
			setReflections(
				defaultQuestions[selectedMood as keyof typeof defaultQuestions]
			);
		}
	}, [selectedMood, initialReflections]);

	const toggleReflection = (index: number) => {
		setOpenReflections((prevState) =>
			prevState.includes(index)
				? prevState.filter((i) => i !== index)
				: [...prevState, index]
		);
	};

	const handleAnswerChange = (index: number, answer: string) => {
		const updatedReflections = [...reflections];
		updatedReflections[index].answer = answer;
		setReflections(updatedReflections);
	};

	return (
		<div className='flex flex-col items-center gap-8 '>
			<div className='w-fit rounded-full bg-white px-4 py-2 text-center shadow-md'>
				<span>Feeling</span> <span className='font-bold'>{selectedMood}!</span>
			</div>
			<div className='flex w-full gap-4 border bg-white px-4 py-2 shadow-md'>
				<div className='h-20 w-20 rounded-md bg-gray-300'></div>
				<div className='text-left'>
					<p className='text-lg'>Journaling Prompt</p>
					<p className='text-2xl font-bold'>Choose your question</p>
				</div>
			</div>
			{reflections.map((reflection, index) => (
				<div
					key={index}
					className={`grid w-full gap-x-5 px-4 py-2 ${openReflections.includes(index) ? 'question-opened grid-cols-[1fr_min-content] grid-rows-2 items-center' : 'question-closed grid-cols-[1fr_min-content] grid-rows-1 rounded-lg border border-[#DEE9F5] bg-[#FAFCFF]'}`}
				>
					<div
						className={`question-div flex flex-row items-center justify-between text-lg text-[#706F6F] ${openReflections.includes(index) ? 'question-opened bg-white' : 'question-closed'}`}
						onClick={() => toggleReflection(index)}
					>
						<span className='font-semibold'>{reflection.question}</span>
					</div>
					<div
						className={`col-start-2 col-end-3 row-span-2 row-start-1 flex self-stretch justify-self-end ${openReflections.includes(index) ? 'question-opened items-start ' : 'question-closed items-center '}`}
						onClick={() => toggleReflection(index)}
					>
						{openReflections.includes(index) ? (
							<Minus
								size={16}
								weight='light'
								className='h-8 w-8 rounded-full bg-[#DEE9F5] px-1'
							/>
						) : (
							<Plus
								size={16}
								weight='light'
								className='h-8 w-8 rounded-full  px-1'
							/>
						)}
					</div>

					{openReflections.includes(index) && (
						<div className='answer-div col-start-1 col-end-2 row-start-2 row-end-3 mt-2 flex flex-col gap-2'>
							<textarea
								placeholder='Type your answer here'
								rows={3}
								value={reflection.answer}
								onChange={(e) => handleAnswerChange(index, e.target.value)}
							/>
						</div>
					)}
				</div>
			))}
			<div className='flex w-[22.5rem] justify-center'>
				<Button
					type='button'
					label='Done'
					primary
					onClick={() => handleSaveMood(reflections)}
					version='primary'
				/>
			</div>
		</div>
	);
};

export default MoodPrompts;