import { FormGroup } from "@angular/forms";

export const passwordChecker = (controlName:string, compareControlName:string) => {
    return(formGroup:FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[compareControlName];
        
        if(password.value !== confirmPassword.value){
            formGroup.setErrors({
                mustmatch: true
            })
        } else {
            formGroup.setErrors(null)
        }
    }
}