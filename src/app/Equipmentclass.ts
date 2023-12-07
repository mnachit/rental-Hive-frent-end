export class Equipment{
    constructor(
        public startDate?: Date,
        public endDate?: Date,
        public name?:string,
        public quantityAvailable?: number,
        public equipmentFamily?:{
            name?: string
        }
    ){}
}