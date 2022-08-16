interface UserData {
   email: string
   name?:string
   password:string
   confirmationPassword?:string
   id?:string
 }
 
 interface Product {
   id:string
   category:string
   title:string
   year:string
   sortingYear: number
   denomination:string
   region:string
   condition:string
   material:string
   weight:string
   description:string
   price:number
   img:{obverse:string,reverse:string,edge?:string}
 }
 
 interface CurrencyType {
   currency: string,
   label: string,
   ratio: number
 }

 interface Filter {
  _page?: number,
  _limit?: number,
  _sort?: string,
  _order?: string,
  category?: string,
  region?: string,
  condition?: string,
 }
 
 export type{
   UserData,
   Product,
   CurrencyType,
   Filter,
 }