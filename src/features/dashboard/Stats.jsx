import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

/* eslint-disable react/prop-types */
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkIns = confirmedStays.length;

  // 4.
  // num checked in nights / all available nights
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title={'Bookings'}
        icon={<HiOutlineBriefcase />}
        color='blue'
        value={numBookings}
      />
      <Stat
        title={'Sales'}
        icon={<HiOutlineBanknotes />}
        color='green'
        value={formatCurrency(sales)}
      />
      <Stat
        title={'Check Ins'}
        icon={<HiOutlineCalendarDays />}
        color='indigo'
        value={checkIns}
      />
      <Stat
        title={'Occupancy rate'}
        icon={<HiOutlineChartBar />}
        color='yellow'
        value={Math.round(occupancy * 100) + '%'}
      />
    </>
  );
}

export default Stats;
