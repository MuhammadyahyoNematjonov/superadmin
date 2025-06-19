import { Body,Controller,Delete,Get,Param,Post, Put } from "@nestjs/common";
import { UserService } from "../users/user.servers"
import {User} from 'src/model/user.model'
import { BadRequestException } from '@nestjs/common';




@Controller()
export class UserContoller {
    constructor(private readonly userservers:UserService){}


    @Get('get')
    getudsers(@Body() pylod:Partial<User>){
        return this.userservers.getusers(pylod)
 
    }


    @Post('users')
    createuser(@Body() pylod:Partial<User>){
        return this.userservers.createuser(pylod)
 
    }


    @Put('put/:id')
    putusers(@Param("id")id:String,@Body() pylod:Partial<User>){
        if (!id || isNaN(+id)) {
         throw new BadRequestException('bunday id yoq');}
        return this.userservers.putusers(+id,pylod)
 
    }



    @Delete('delete/:id')
    delteusers(@Param("id")id:String){
        if (!id || isNaN(+id)) {
         throw new BadRequestException('bunday id yoq');}

        return this.userservers.deleteuserss(+id)
 
    }



}

