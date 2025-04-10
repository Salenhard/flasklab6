import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from 'react'
import { axisClasses } from '@mui/x-charts';
import SettingChart from './SettingChart';
import { tGroup } from '../../groupdata';

function GroupChart( data : tGroup) {
  const [isBar, setIsBar] = useState(true);

  const [series, setSeries] = useState({
    'Максимальная высота': true,
    'Средняя высота': false,
    'Минимальная высота': false,
  });

  let seriesY = Object.entries(series)
    .filter(item => item[1] === true)
    .map(item => {
      return { "dataKey": item[0], "label": item[0] }
    });

  const chartSetting = {
    yAxis: [
      {
        label: 'Высота(м)',
      },
    ],
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  };

  return (
    <Container maxWidth="lg">
      { isBar ?
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'middle' },
              padding: 0,
            },
          }}
          {...chartSetting}
        />
        :
        <LineChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'middle' },
              padding: 0,
            },
          }}
          {...chartSetting}
        />}
      <SettingChart series={series} setSeries={setSeries} />
    </Container>
  )
}

export default GroupChart;