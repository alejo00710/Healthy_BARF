/*
  Warnings:

  - You are about to drop the `ItemCarrito` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ItemCarrito` DROP FOREIGN KEY `ItemCarrito_productoId_fkey`;

-- DropForeignKey
ALTER TABLE `ItemCarrito` DROP FOREIGN KEY `ItemCarrito_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `MovimientoStock` ADD COLUMN `productoId` INTEGER NULL;

-- DropTable
DROP TABLE `ItemCarrito`;

-- AddForeignKey
ALTER TABLE `MovimientoStock` ADD CONSTRAINT `MovimientoStock_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
