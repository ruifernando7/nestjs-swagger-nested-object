import { ApiProperty } from "@nestjs/swagger";
import { IsHexColor, IsInt, IsNotEmpty, IsOptional, IsPositive, ValidateNested } from "class-validator";
import { FurOtherDto } from "./fur-other.dto";

export class FurTypeDto {
  /**
   * The color.
   * @example #000000
   */
  @IsHexColor()
  @IsOptional()
  color: string;

  /**
   * The length.
   * @example 60
   */
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  length: number;

  /**
   * The fur properties.
   */
  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty({ type: FurOtherDto })
  others: FurOtherDto;
}
