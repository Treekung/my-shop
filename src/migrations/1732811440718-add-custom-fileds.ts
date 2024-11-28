import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCustomFileds1732811440718 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `product` ADD `customFieldsStatus` tinyint NULL DEFAULT 1", undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `customFieldsStatus`", undefined);
   }

}
