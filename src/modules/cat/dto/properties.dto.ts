import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, ValidateNested } from "class-validator";
import { FurTypeDto } from "./fur-type.dto";

export class PropertiesDto {

  /**
   * The height
   * @example 100
   */
  @IsNotEmpty()
  @IsInt()
  height: number;

  /**
   * Fur types.
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FurTypeDto)
  @ApiProperty({ type: [FurTypeDto] })
  fur_types: FurTypeDto[];
}
