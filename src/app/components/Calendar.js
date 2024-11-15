import { useDateStore } from '../state/useDateStore';

export default function Calendar() {
    const { recurringDates } = useDateStore();

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Recurring Dates Preview</h3>
            {recurringDates.length === 0 ? (
                <p className="text-sm text-gray-500">No dates selected yet.</p>
            ) : (
                <ul className="space-y-1">
                    {recurringDates.map((date, index) => (
                        <li key={index} className="text-sm text-gray-700">
                            {date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
