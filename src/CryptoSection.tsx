import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function CryptoSection() {
  const [chartData, setChartData] = useState<ChartData<'line', number[], string>>({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
          params: { vs_currency: 'usd', days: 7 },
        });
        const labels = res.data.prices.map((p: [number, number]) =>
          new Date(p[0]).toLocaleDateString()
        );
        const prices = res.data.prices.map((p: [number, number]) => p[1]);
        setChartData({
          labels,
          datasets: [
            {
              label: 'BTC Price (USD)',
              data: prices,
              fill: true,
              borderColor: '#00cec9',
              backgroundColor: 'rgba(0,236,201,0.2)',
              tension: 0.4,
            },
          ],
        });
      } catch {
        setError('Failed to load chart data.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center py-10">Loading chart…</p>;
  if (error)   return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section id="crypto" className="py-20 bg-violet-950/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Bitcoin Price (Last 7 Days)</h2>
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend:  { position: 'bottom' },
              tooltip: { mode: 'index', intersect: false },
            },
            scales: {
              x: { ticks: { color: '#2d3436' } },
              y: { ticks: { color: '#2d3436' }, beginAtZero: false },
            },
          }}
        />
      </div>
    </section>
  );
}
 