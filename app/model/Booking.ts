import { Room } from 'src/app/model/Room';
import { User } from 'src/app/model/User';
export class Booking
{
    id:number;
    room:Room;
    user:User;
    purpose:string;
    participants:number;
}