import { IsInt, IsNotEmpty } from "class-validator";

export class MarginDto {
  /**
   * The margin of left side.
   * @example 4
   */
  @IsNotEmpty()
  @IsInt()
  left: number;

  /**
   * The margin of top side.
   * @example 4
   */
  @IsNotEmpty()
  @IsInt()
  top: number;

  /**
   * The margin of right side.
   * @example 4
   */
  @IsNotEmpty()
  @IsInt()
  right: number;

  /**
   * The margin of bottom side.
   * @example 4
   */
  @IsNotEmpty()
  @IsInt()
  bottom: number;
}
