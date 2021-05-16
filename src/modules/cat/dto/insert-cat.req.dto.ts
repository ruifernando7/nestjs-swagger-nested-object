import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, ValidateNested } from "class-validator";
import { CatIds } from "../utils/constant";
import { PropertiesDto } from "./properties.dto";

export class InsertCatReqDto {
  @IsNotEmpty()
  @IsEnum(CatIds)
  @ApiProperty({ enum: CatIds })
  cat_id: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty({ type: PropertiesDto })
  properties: PropertiesDto;
}
