export const useCreateYearsList = () => {
  const yearsList: string[] = [];
  const ErasList: string[] = [];
  const currentDate = new Date();
  const typeEra = /^\D\D\d*/;
  const currentYear = currentDate.getFullYear();
  for(let i = 1950; i <= currentYear; i++) {;
    yearsList.push(String(i));
    // console.log(yearsList);
    let targetYear = new Date(String(i));
    let pastEraData = targetYear.toLocaleString('ja-JP-u-ca-japanese', {era: 'short'});
    let pastEra = pastEraData.match(typeEra);
    if(pastEra !== null) ErasList.push(pastEra[0]);
    // console.log(targetYear, pastEraData, pastEra[0])
  }
  return {yearsList, ErasList};
}

export const useCreateMonthsList = () => {
  const monthsList: string[] = [];
  for(let i = 1; i <= 12; i++) {
    monthsList.push(String(i));
  }
  return monthsList;
}

export const useCreateDaysList = () => {
  const daysList: string[] = [];
  for(let i = 1; i <= 31; i++) {
    daysList.push(String(i));
  }
  return daysList;
}

  //   rebuildDate: function() {
  //     this.$store.getters.getDaysList.length = 0;
  //     const typeYear = /^\d*/;
  //     let setYear = this.$store.getters.getBirthdayYear.match(typeYear);
  //     let targetDate = new Date(Number(setYear[0]), this.$store.getters.getBirthdayMonth, 0);
  //     let displayLastDay = targetDate.getDate();
  //     for(let i = 1; i <= displayLastDay; i++) {
  //       this.$store.commit('createDaysList', i);
  //     }
  //   }

