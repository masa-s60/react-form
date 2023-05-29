import { typeTransitionHandlingItem } from '../../types/types';

export const checkFormState = (transitionHandlingItem: typeTransitionHandlingItem) => {
  if(transitionHandlingItem.buttonValue === '前へ戻る') {
    transitionHandlingItem.setStepNumber(transitionHandlingItem.transitionNum);
  } else {
    if(transitionHandlingItem.stepNumber === 1) {
      if(!transitionHandlingItem.formData.sex) {
        return window.alert('性別が選択されていません');
      } else {
        transitionHandlingItem.setStepNumber(transitionHandlingItem.transitionNum);
      }
    } else if(transitionHandlingItem.stepNumber === 2) {
      if((!transitionHandlingItem.formData.lifeInsurance) || 
      (!transitionHandlingItem.formData.hospitalization) || 
      (!transitionHandlingItem.formData.operated)) {
        return window.alert('全ての項目が選択されていません');
      } else {
        transitionHandlingItem.setStepNumber(transitionHandlingItem.transitionNum);
      }
    } else if(transitionHandlingItem.stepNumber === 3) {
      if(!transitionHandlingItem.formData.consultation) {
        return window.alert('内容が入力されていません');
      } else {
        transitionHandlingItem.setStepNumber(transitionHandlingItem.transitionNum);
      }
    }
  }
}