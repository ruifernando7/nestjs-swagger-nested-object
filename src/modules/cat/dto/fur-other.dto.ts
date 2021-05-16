import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty } from "class-validator";
import { DominantColors } from "../utils/constant";

export class FurOtherDto {
  @IsNotEmpty()
  @IsEnum(DominantColors)
  @ApiProperty({ enum: DominantColors })
  dominant_color: string;

  @IsNotEmpty()
  @IsBoolean()
  is_mix: boolean;
}
