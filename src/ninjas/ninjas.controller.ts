import { Controller,Get,Post,Put,Delete, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService:NinjasService){}
    @Get()
    getNinjas(@Query('weapon') weapon:'sword' | 'hatchet'){

        // const service = new NinjasService()
        return this.ninjaService.getNinjas(weapon)
    }

    @Get(":id")
    getOneNinja(@Param("id") id:string){
        return this.ninjaService.getNinja(+id)
    }

    @Post()
    createNinja(@Body() createNinjaData: CreateNinjaDto){
       return this.ninjaService.createNinja(createNinjaData)
    }

    @Put(":id")
    updateNinja(@Param("id") id:string,@Body() updateNinjaDto: UpdateNinjaDto){
      return this.ninjaService.updateNinja(+id,updateNinjaDto)
    }

    @Delete(":id")
    removeNinja(@Param("id") id:string){
        return this.ninjaService.removeNinja(+id)
    }
}
