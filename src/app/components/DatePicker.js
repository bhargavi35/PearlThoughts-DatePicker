'use client'

import { useEffect, useState } from 'react';
import { useDateStore } from '../state/useDateStore';
import Calendar from './Calendar';

const recurrenceOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

export default function DatePicker() {
    const [recurrence, setRecurrence] = useState('Daily');
    const [interval, setInterval] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isClient, setIsClient] = useState(false); // State to track if we are on the client-side

    const { setRecurringDates } = useDateStore();

    // Effect to handle hydration and prevent SSR mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleRecurrenceChange = (e) => {
        setRecurrence(e.target.value);
    };

    const handleIntervalChange = (e) => {
        setInterval(e.target.value);
    };

    const handleDateChange = () => {
        const options = {
            recurrence,
            interval: parseInt(interval, 10),
            startDate,
            endDate,
        };
        setRecurringDates(options);
    };

    // Only render if we're on the client (no SSR mismatch)
    if (!isClient) {
        return null; // Return null or a loading state to avoid hydration error
    }

    return (
        <div className="space-y-4">
            {/* Recurrence Options */}
            <div>
                <label className="block text-sm font-medium mb-1">Recurrence</label>
                <select
                    value={recurrence}
                    onChange={handleRecurrenceChange}
                    className="border rounded w-full p-2"
                >
                    {recurrenceOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Interval */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Interval (e.g., every X days/weeks)
                </label>
                <input
                    type="number"
                    value={interval}
                    onChange={handleIntervalChange}
                    className="border rounded w-full p-2"
                    min="1"
                />
            </div>

            {/* Start Date */}
            <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border rounded w-full p-2"
                />
            </div>

            {/* End Date */}
            <div>
                <label className="block text-sm font-medium mb-1">End Date (optional)</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border rounded w-full p-2"
                />
            </div>

            {/* Apply Changes */}
            <button
                onClick={handleDateChange}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Apply
            </button>

            {/* Calendar Preview */}
            <Calendar />
        </div>
    );
}
