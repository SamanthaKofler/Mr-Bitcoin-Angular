

export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '',
    ) {
    }
    // public imgUrl: string = ''

    setId?() {
        // // Implement your own set Id
        // var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // var id = '';
        // var num1 = 0;
        // var num2 = chars.length;
        // for (let i = 0; i < length; i++) {
        //     var max = (num1 >= num2) ? num1 : num2;
        //     var min = (num1 <= num2) ? num1 : num2;
        //     var idx = Math.floor(Math.random() * (max - min)) + min;
        //     id += chars[idx];
        // }
        // this._id = id;
    }
}

// "_id": "5a56640269f443a5d64b32ca",
// "name": "Ochoa Hyde",
// "email": "ochoahyde@renovize.com",
// "phone": "+1 (968) 593-3824"
// }