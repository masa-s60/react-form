import FormHead from '../common/Molecules/form-head';
import Question from '../common/Molecules/question';
// import Birthday from '../common/Molecules/birthday';
const FormStep2 = () => {
  const yesOrNo = ['はい', 'いいえ'];
  return(
    <div className="formStep2">
        <form id="app" className="p-form" action="">
          <FormHead stepNum='2' checklist='以下にお答えください'/>
          <Question title='現在、生命保険に加入されていますか？' radioButtonItems={yesOrNo}/>
          <Question title='現在入院中ですか。また、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？' radioButtonItems={yesOrNo}/>
          <Question title='過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？' radioButtonItems={yesOrNo}/>
        </form>
    </div>
  );
}

export default FormStep2;