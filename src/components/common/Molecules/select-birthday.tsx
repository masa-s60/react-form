import SelectYear from '../atoms/select-year';
import SelectMonth from '../atoms/select-month';
import SelectDay from '../atoms/select-day';
const SelectBirthday = () => {
  return(
    <div className="p-question">
      <SelectYear/>
      <SelectMonth/>
      <SelectDay/>
    </div>
  );
}

export default SelectBirthday;