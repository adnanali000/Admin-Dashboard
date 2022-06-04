import './chart.scss'
import { LineChart,Area,AreaChart,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "January", Total: 1300},
  { name: "February", Total: 1200},
  { name: "March", Total: 2100},
  { name: "April", Total: 1600},
  { name: "May", Total: 1400},
  { name: "June", Total: 1800},
  { name: "July", Total: 1900},


]

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 7 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart