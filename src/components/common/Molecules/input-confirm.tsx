// import { FC } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../store/store';
import QuestionItem from '../atoms/question-item';
const InputConfirm = () => {
  const formState = store.getState().formData;
  const ADOnly = formState.birthdayYear.match(/^\d*/);
  return(
    <div>
      <div className='block'>
        <QuestionItem title='性別'/>
        <p className='ml-4'>{formState.sex}</p>
      </div>
      <div className='block'>
        <QuestionItem title='生年月日'/>
        <p className='ml-4'>{ADOnly![0]}年{formState.birthdayMonth}月{formState.birthdayDay}日</p>
      </div>
      <div className='block'>
        <QuestionItem title='現在、生命保険に加入されていますか？'/>
        <p className='ml-4'>{formState.lifeInsurance}</p>
      </div>
      <div className='block'>
        <QuestionItem title='現在入院中ですか。また、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？'/>
        <p className='ml-4'>{formState.hospitalization}</p>
      </div>
      <div className='block'>
        <QuestionItem title='過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？'/>
        <p className='ml-4'>{formState.operated}</p>
      </div>
      <div className='block'>
        <QuestionItem title='ご確認内容'/>
        <p className='ml-4'>{formState.consultation}</p>
      </div>
    </div>
  );
}

export default InputConfirm;