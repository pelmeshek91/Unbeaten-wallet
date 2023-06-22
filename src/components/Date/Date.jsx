// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { enGB } from 'date-fns/locale';
// import { forwardRef, useState } from 'react';
// import { DivContainer, InputDate } from './Date.styled';
// import { BsCalendar4Week } from 'react-icons/bs';
// import './date.css';

// export const TransactionDate = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date()); ///записуємо  в початковий стан дату сьогоднішню

//   //  використовуємо forwardRef шоб передати ref з DatePicker комп до внутрішньої комп CustomInput
//   const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
//     <InputDate
//       value={value}
//       onClick={onClick}
//       onChange={onChange}
//       ref={ref}
//       onKeyDown={e => {
//         e.preventDefault();
//       }}
//     ></InputDate>
//   ));

//   return (
//     <DivContainer>
//       {/* icon calendaryk */}
//       <BsCalendar4Week style={{ width: '20px', height: '20px' }} />
//       <DatePicker
//         dateFormat="dd.MM.yyyy"
//         selected={selectedDate}
//         onChange={date => {
//           setSelectedDate(date);
//         }}
//         locale={enGB}
//         maxDate={new Date()}
//         calendarClassName="calendar"
//         className="datepicker"
//         customInput={<CustomInput />}
//       />
//     </DivContainer>
//   );
// };
