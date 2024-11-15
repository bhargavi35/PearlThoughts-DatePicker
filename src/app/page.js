import DatePicker from './components/DatePicker';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-4">Recurring Date Picker</h1>
        <DatePicker />
      </div>
    </div>
  );
}
