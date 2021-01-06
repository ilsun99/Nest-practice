import { GetHelloDTO } from './dto/getHello.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getHello(name: string, age: number): GetHelloDTO;
}
