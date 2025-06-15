import prisma from '../config/prisma.js';

// GET /user/:id/favoritos
export const obtenerFavoritos = async (req, res) => {
    const { id } = req.params;

    try {
        const favoritos = await prisma.favorito.findMany({
            where: { usuarioId: parseInt(id) },
            include: { producto: true }
        });
console.log("favorito agregado")
        const productos = favoritos.map(fav => fav.producto);
        res.json(productos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al obtener favoritos' });
    }
};

// POST /favoritos
export const agregarFavorito = async (req, res) => {
    const usuarioId = req.usuario.id;
    const { productoId } = req.body;

    try {
        const yaExiste = await prisma.favorito.findUnique({
            where: {
                usuarioId_productoId: {
                    usuarioId,
                    productoId
                }
            }
        });

        if (yaExiste) return res.status(400).json({ mensaje: 'Ya en favoritos' });

        const favorito = await prisma.favorito.create({
            data: { usuarioId, productoId }
        });

        res.json(favorito);
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al agregar favorito' });
    }
};

// DELETE /favoritos/:productoId
export const eliminarFavorito = async (req, res) => {
    const usuarioId = req.usuario.id;
    const productoId = parseInt(req.params.productoId);

    try {
        await prisma.favorito.delete({
            where: {
                usuarioId_productoId: {
                    usuarioId,
                    productoId
                }
            }
        });

        res.json({ mensaje: 'Favorito eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al eliminar favorito' });
    }
};
