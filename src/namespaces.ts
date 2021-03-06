/// <reference path="form-namespaces.ts"/>

namespace Form {

    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    const myForm = new MyForm('m@dgail.com')
}
console.log(Form.myForm)



