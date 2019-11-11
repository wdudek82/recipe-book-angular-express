import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserIdColumnToShoppingList1573412241720 implements MigrationInterface {
    name = 'AddUserIdColumnToShoppingList1573412241720'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "shopping_lists" DROP CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ALTER COLUMN "userId" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ADD CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "shopping_lists" DROP CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8"`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ALTER COLUMN "userId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ADD CONSTRAINT "FK_5b9bb541ecf94396d2078d96df8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
