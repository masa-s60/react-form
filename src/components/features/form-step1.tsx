import { useSelector } from "react-redux";
import FormHead from '../common/Molecules/form-head';
import Question from '../common/Molecules/question';
import Birthday from '../common/Molecules/birthday';
import { setSex } from '../../store/form-data-slice';
import { rootFormData } from '../../types/types'
const FormStep1 = () => {
  const sexState = useSelector<rootFormData>((state) => state.formData.sex);

  return(
    <div className="block column is-8 is-offset-2 transition-animation" style={{border: 'solid 1.5px #00d890', borderRadius: '5px'}}>
        <form  id="app" action="">
          <FormHead 
            stepNum='1' 
            checklist='お客様の情報を入力してください' 
            icon='fas fa-id-card'
          />
          <Question 
            title='性別' 
            radioButtonItems={['男性', '女性']} 
            reducer={setSex} 
            state={sexState as string} 
            labelID={['male', 'female']}
          />
          <Birthday/>
        </form>
    </div>
  );
}

export default FormStep1;
// {
//   name:'formStep1',
//   beforeMount() {
//     this.setStepNumber(1)
//   },
//   mounted() {
//     this.createYearsList()
//     this.createDaysList()
//   },
//   beforeRouteLeave(step2, step1, next) {
//     if(this.$store.getters.getSex === '') {
//       return window.alert('性別が選択されていません');
//     } else {
//       next();
//     }
//   },
//   computed: {
//     sex: {
//       get() {
//         return this.$store.getters.getSex;
//       },
//       set(sex) {
//         this.$store.dispatch("commitSex", sex);
//       }
//     },
//     year: {
//       get() {
//         return this.$store.getters.getBirthdayYear;
//       },
//       set(year) {
//         this.$store.dispatch("commitYear", year);
//       }
//     },
//     month: {
//       get() {
//         return this.$store.getters.getBirthdayMonth;
//       },
//       set(month) {
//         this.$store.dispatch("commitMonth", month);
//       }
//     },
//     day: {
//       get() {
//         return this.$store.getters.getBirthdayDay;
//       },
//       set(day) {
//         this.$store.dispatch("commitDay", day);
//       }
//     },
//   },
//   methods: {
//     createYearsList: function() {
//       const currentDate = new Date();
//       const typeEra = /^\D\D\d*/;
//       const currentYear = currentDate.getFullYear();
//       for(let i = 1950; i <= currentYear; i++) {
//         this.$store.commit('createYearsList', i);
//         let targetYear = new Date(String(i));
//         let pastEraData = targetYear.toLocaleString('ja-JP-u-ca-japanese', {era: 'short'});
//         let pastEra = pastEraData.match(typeEra);
//         this.$store.commit('createErasList', pastEra[0]);
//       }
//     },
//     createDaysList: function() {
//       for(let i = 1; i <= 31; i++) {
//         this.$store.commit('createDaysList', i);
//       }
//     },
//     rebuildDate: function() {
//       this.$store.getters.getDaysList.length = 0;
//       const typeYear = /^\d*/;
//       let setYear = this.$store.getters.getBirthdayYear.match(typeYear);
//       let targetDate = new Date(Number(setYear[0]), this.$store.getters.getBirthdayMonth, 0);
//       let displayLastDay = targetDate.getDate();
//       for(let i = 1; i <= displayLastDay; i++) {
//         this.$store.commit('createDaysList', i);
//       }
//     },
//     setStepNumber: function(stepNumber) {
//       this.$store.dispatch("commitStepNumber", stepNumber);
//     },
//   }
// }