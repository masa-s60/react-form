import SelectYear from '../atoms/select-year';
import SelectMonth from '../atoms/select-month';
import SelectDay from '../atoms/select-day';
const SelectBirthday = () => {
  return(
    <div className="columns">
        <SelectYear/>
        <SelectMonth/>
        <SelectDay/>
    </div>
  );
}

export default SelectBirthday;