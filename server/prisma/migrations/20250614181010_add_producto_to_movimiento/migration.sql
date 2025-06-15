-- DropForeignKey
ALTER TABLE `MovimientoStock` DROP FOREIGN KEY `MovimientoStock_materiaPrimaId_fkey`;

-- DropIndex
DROP INDEX `MovimientoStock_materiaPrimaId_fkey` ON `MovimientoStock`;

-- AlterTable
ALTER TABLE `MovimientoStock` MODIFY `materiaPrimaId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `MovimientoStock` ADD CONSTRAINT `MovimientoStock_materiaPrimaId_fkey` FOREIGN KEY (`materiaPrimaId`) REFERENCES `MateriaPrima`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
