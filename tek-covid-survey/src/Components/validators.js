export const validators = values=>
{
    const errors = {};
    if(!values.q1){
        errors.q1="Please answer this question!"
    }
    if(!values.q2){
        errors.q2="Please answer this question!"
    }
    if(!values.q3){
        errors.q3="Please answer this question!"
    }
    if(!values.q4){
        errors.q4="Please answer this question!"
    }
    if(!values.q5){
        errors.q5="Please answer this question!"
    }
    if(!values.q6){
        errors.q6="Please answer this question!"
    }
    
    console.log(errors);
    return errors;
}