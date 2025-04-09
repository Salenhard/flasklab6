import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from 'react'
import { axisClasses } from '@mui/x-charts';

interface Building {
  id: number;
  Название: string;
  Тип: string;
  Страна: string;
  Город: string;
  Год: number;
  Высота: number;
}

function GroupChart({ data } : Building[]) {
  const [isBar, setIsBar] = useState(true);

  const seriesY = [
    { dataKey: 'Минимальная высота', label: 'Минимальная высота' },
    { dataKey: 'Средняя высота', label: 'Средняя высота' },
    { dataKey: 'Максимальная высота', label: 'Максимальная высота' },
  ];

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

    return(
        <Container maxWidth="lg">  
          { isBar === true ?
           <BarChart
            dataset={ data }
            xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
            series={ seriesY } 
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
            dataset={ data }
            xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
            series={ seriesY }
            slotProps={{
              legend: {
                position: { vertical: 'bottom', horizontal: 'middle' },
                padding: 0,
              },
            }}
            {...chartSetting}
            /> } 
            
        </Container>
    )
}

export default GroupChart;