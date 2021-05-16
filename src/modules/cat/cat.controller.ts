import { Response } from "express";
import { Body, Controller, Post, Res } from "@nestjs/common";
import { InsertCatReqDto } from "./dto/insert-cat.req.dto";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags('Cats')
@ApiBearerAuth('access-token')
@Controller('cats')
export class CatController {

  constructor() { }

  @ApiBody({ type: InsertCatReqDto })
  @Post('/')
  public async insertPdfTemplate(
    @Body() dto: InsertCatReqDto,
    @Res() res: Response
  ): Promise<any> { }
}
