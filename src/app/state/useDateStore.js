import { create } from 'zustand';

export const useDateStore = create((set) => ({
    recurringDates: [],
    setRecurringDates: ({ recurrence, interval, startDate, endDate }) => {
        if (!startDate) return;

        const dates = [];
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : null;

        while (!end || start <= end) {
            dates.push(start.toISOString().split('T')[0]);

            // Increment date based on recurrence
            if (recurrence === 'Daily') start.setDate(start.getDate() + interval);
            else if (recurrence === 'Weekly') start.setDate(start.getDate() + 7 * interval);
            else if (recurrence === 'Monthly') start.setMonth(start.getMonth() + interval);
            else if (recurrence === 'Yearly') start.setFullYear(start.getFullYear() + interval);
        }

        set({ recurringDates: dates });
    },
}));
