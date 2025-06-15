import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/modal/modal";
import styles from "../../styles/admin/admin.module.css";
import editar from "../../assets/images/editar.png";
import Delete from "../../assets/images/Delete.png"

const AdminMain = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [movimientos, setMovimientos] = useState([]);
  const [activeTab, setActiveTab] = useState("usuarios");
  const [isCreating, setIsCreating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // objeto con datos
  const [editType, setEditType] = useState(""); // usuario, producto, pedido

  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [usuariosRes, productosRes, pedidosRes, movimientosRes] =
        await Promise.all([
          fetch("http://localhost:3000/user", { headers }),
          fetch("http://localhost:3000/producto/listar", { headers }),
          fetch("http://localhost:3000/pedido", { headers }),
          fetch("http://localhost:3000/stock", { headers }),
        ]);

      if (
        !usuariosRes.ok ||
        !productosRes.ok ||
        !pedidosRes.ok ||
        !movimientosRes.ok
      ) {
        throw new Error("Error al cargar los datos");
      }

      setUsuarios(await usuariosRes.json());
      setProductos(await productosRes.json());
      setPedidos(await pedidosRes.json());
      setMovimientos(await movimientosRes.json());
    } catch (error) {
      console.error("Error cargando los datos del admin:", error);
    }
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
    try {
      const res = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (res.ok) {
        alert("Usuario eliminado correctamente");
        setUsuarios((prev) => prev.filter((u) => u.id !== id));
      } else if (res.status === 409) {
        alert("No se puede eliminar el usuario por relaciones existentes.");
      } else {
        alert(data.mensaje || "Error al eliminar usuario");
      }
    } catch (err) {
      alert("Error al conectar con el servidor.");
    }
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return;
    try {
      const res = await fetch(`http://localhost:3000/producto/eliminar/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (res.ok) {
        alert("Producto eliminado correctamente");
        setProductos((prev) => prev.filter((p) => p.id !== id));
      } else if (res.status === 409) {
        alert(data.mensaje || "Producto con relaciones activas");
      } else {
        alert("Error al eliminar producto");
      }
    } catch (err) {
      alert("Error al conectar con el servidor.");
    }
  };

  const handleEdit = (item, type) => {
    setEditingItem(item);
    setEditType(type);
    setModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let url = "";
    let body = {};
    if (editType === "usuario") {
      url = `http://localhost:3000/user/${editingItem.id}`;
      body = {
        nombre: editingItem.nombre,
        correo: editingItem.correo,
        rol: editingItem.rol,
      };
    } else if (editType === "producto") {
      url = `http://localhost:3000/producto/actualizar/${editingItem.id}`;
      body = {
        nombre: editingItem.nombre,
        precio: Number(editingItem.precio),
        gramos: Number(editingItem.gramos),
        imagenUrl: editingItem.imagenUrl,
      };
    } else if (editType === "pedido") {
      url = `http://localhost:3000/pedido/${editingItem.id}/estado`;
      body = {
        estado: editingItem.estado,
        direccion: editingItem.direccion,
      };
    }

    try {
      const res = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });

      if (res.ok) {
        alert("Actualizado correctamente");
        setModalOpen(false);
        fetchData();
      } else {
        const data = await res.json();
        alert(data.mensaje || "Error al actualizar");
      }
    } catch (error) {
      alert("Error de red al actualizar");
    }
  };

  const renderEditForm = () => {
    if (!editingItem) return null;
  
    return (
      <form
        onSubmit={isCreating ? handleCreateSubmit : handleEditSubmit}
        className={styles.editForm}
      >
        {editType === "usuario" && (
           <div className={styles["form"]}>
            <label>
              Nombre:
              <input
                value={editingItem.nombre}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, nombre: e.target.value })
                }
              />
            </label>
            <label>
              Correo:
              <input
                value={editingItem.correo}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, correo: e.target.value })
                }
              />
            </label>
            {isCreating && (
              <label>
                Contraseña:
                <input
                  type="password"
                  value={editingItem.contrasena || ""}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, contrasena: e.target.value })
                  }
                />
              </label>
            )}
            <label>
              Rol:
              <select
                value={editingItem.rol}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, rol: e.target.value })
                }
              >
                <option value="CLIENTE">CLIENTE</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </label>
            </div>
        )}
  
        {editType === "producto" && (
           <div className={styles["form"]}>
            <label>
              Nombre:
              <input
                value={editingItem.nombre}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, nombre: e.target.value })
                }
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                value={editingItem.precio}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, precio: e.target.value })
                }
              />
            </label>
            <label>
              Gramos:
              <input
                type="number"
                value={editingItem.gramos}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, gramos: e.target.value })
                }
              />
            </label>
            <label>
              Descripcion:
              <input
                type="text"
                value={editingItem.descripcion}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, descripcion: e.target.value })
                }
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                value={editingItem.stock}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, stock: e.target.value })
                }
              />
            </label>
            <label>
              Imagen URL:
              <input
                value={editingItem.imagenUrl}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, imagenUrl: e.target.value })
                }
              />
            </label>
            <label>
              Categoria:
              <select
                value={editingItem.categoria}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, categoria: e.target.value })
                }
              >
                <option value="PERRO">PERRO</option>
                <option value="GATO">GATO</option>
              </select>
            </label>
            <label>
              Subcategoria
              <select
                value={editingItem.subcategoria}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, subcategoria: e.target.value })
                }
              >
                <option value="COMIDA_CRUDA">COMIDA_CRUDA</option>
                <option value="SNACK">SNACK</option>
              </select>
            </label>
            </div>
        )}
  
        {editType === "pedido" && (
           <div className={styles["form"]}>
            <label>
              Estado:
              <select
                value={editingItem.estado}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, estado: e.target.value })
                }
              >
                <option value="PENDIENTE">PENDIENTE</option>
                <option value="ENVIADO">ENVIADO</option>
                <option value="ENTREGADO">ENTREGADO</option>
                <option value="CANCELADO">CANCELADO</option>
              </select>
            </label>
            <label>
              Dirección:
              <input
                value={editingItem.direccion}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, direccion: e.target.value })
                }
              />
            </label>
          </div>
        )}
  
        <button type="submit" className={styles["edit-submit"]}>
          {isCreating ? "Crear" : "Guardar"}
        </button>
      </form>
    );
  };
  

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    let url = "";
    let body = {};
  
    if (editType === "usuario") {
      url = "http://localhost:3000/auth/registro";
      body = {
        nombre: editingItem.nombre,
        correo: editingItem.correo,
        contrasena: editingItem.contrasena, // o pedirlo en el form
        rol: editingItem.rol,
      };
    } else if (editType === "producto") {
      url = "http://localhost:3000/producto/crear";
      body = {
        nombre: editingItem.nombre,
        descripcion: editingItem.descripcion,
        precio: Number(editingItem.precio),
        stock: Number(editingItem.stock),
        imagenUrl: editingItem.imagenUrl,
        categoria: editingItem.categoria,
        subcategoria: editingItem.subcategoria,
        gramos: Number(editingItem.gramos),
      };
    }
  
    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Creado correctamente");
        setModalOpen(false);
        setIsCreating(false);
        fetchData();
      } else {
        alert(data.mensaje || "Error al crear");
      }
    } catch (error) {
      alert("Error de red al crear");
    }
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setIsCreating(false);
    setEditingItem(null);
    setEditType("");
  };

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  const handleBack = () => navigate(-1);

  const renderSection = () => {
    switch (activeTab) {
      case "usuarios":
        return (
          <section className={styles.section}>
            <button onClick={() => {
            setEditingItem({ nombre: "", correo: "", rol: "", contrasena: "" });
            setEditType("usuario");
            setIsCreating(true);
            setModalOpen(true);
            }} className={styles["create-btn"]}>
            Crear Usuario
            </button>
            <h2>Usuarios</h2>
            <table className={styles["products-table"]}>
              <thead className={styles["table-header"]}>
                <tr>
                  <th>ID</th><th>Nombre</th><th>Email</th><th>Rol</th><th>Eliminar</th><th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td><td>{u.nombre}</td><td>{u.correo}</td><td>{u.rol}</td>
                    <td><button onClick={() => eliminarUsuario(u.id)} className={styles["delete-btn"]}><img src={Delete} alt="Eliminar"/></button></td>
                    <td><button onClick={() => handleEdit(u, "usuario")} className={styles["editar-btn"]}><img src={editar} alt="editar"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );

      case "productos":
        return (
          <section className={styles.section}>
            <button onClick={() => {
            setEditingItem({ nombre: "", precio: "", gramos: "", imagenUrl: "" });
            setEditType("producto");
            setIsCreating(true);
            setModalOpen(true);
            }} className={styles["create-btn"]}>
            Crear Producto
            </button>
            <h2>Productos</h2>
            <table className={styles["products-table"]}>
              <thead className={styles["table-header"]}>
                <tr>
                  <th>ID</th><th>Imagen</th><th>Nombre</th><th>Precio</th><th>Gramos</th><th>Fecha</th><th>Eliminar</th><th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td><img src={p.imagenUrl} alt="Producto" /></td>
                    <td>{p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>{p.gramos} gr</td>
                    <td>{new Date(p.creadoEn).toLocaleDateString()}</td>
                    <td><button onClick={() => eliminarProducto(p.id)} className={styles["delete-btn"]}><img src={Delete} alt="Eliminar"/></button></td>
                    <td><button onClick={() => handleEdit(p, "producto")} className={styles["editar-btn"]}><img src={editar} alt="editar"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );

      case "pedidos":
        return (
          <section className={styles.section}>
            <h2>Pedidos</h2>
            <table className={styles["products-table"]}>
              <thead className={styles["table-header"]}>
                <tr>
                  <th>ID</th><th>Usuario</th><th>Total</th><th>Estado</th><th>Dirección</th><th>Fecha</th><th>Productos</th><th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td><td>{p.usuario.nombre}</td><td>${p.total}</td><td>{p.estado}</td><td>{p.direccion}</td><td>{new Date(p.creadoEn).toLocaleDateString()}</td><td>
                <ul>
                  {p.items.map((item) => (
                    <li key={item.id}>
                      {item.producto?.nombre} x{item.cantidad} ({item.producto?.gramos}g)
                    </li>
                  ))}
                </ul>
              </td> 
                    <td><button onClick={() => handleEdit(p, "pedido")} className={styles["editar-btn"]}><img src={editar} alt="editar"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );

      case "stock":
        return (
          <section className={styles.section}>
            <h2>Movimientos / Stock</h2>
            <table className={styles["products-table"]}>
              <thead className={styles["table-header"]}>
                <tr><th>ID</th><th>Producto</th><th>Cantidad</th><th>Fecha</th></tr>
              </thead>
              <tbody>
                {movimientos.map((m) => (
                  <tr key={m.id}>
                    <td>{m.id}</td><td>{m.productoId}</td><td>{m.cantidad}</td><td>{new Date(m.creadoEn).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main className={styles["main-content"]}>
      <div className={styles["content-header"]}>
        <button onClick={handleBack} className={styles.backButton}>&lt; Volver</button>
        <div className={styles["header-actions"]}>
          <button  className={styles["create-btn"]}  onClick={() => setActiveTab("usuarios")}>Usuarios</button>
          <button  className={styles["create-btn"]}  onClick={() => setActiveTab("productos")}>Productos</button>
          <button  className={styles["create-btn"]}  onClick={() => setActiveTab("pedidos")}>Pedidos</button>
          <button  className={styles["create-btn"]}  onClick={() => setActiveTab("stock")}>Stock/Movimientos</button>
        </div>
      </div>

      <div className={styles["tab-container"]}>{renderSection()}</div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
  <h2>{isCreating ? "Crear" : "Editar"} {editType}</h2>
  {renderEditForm()}
</Modal>
    </main>
  );
};

export default AdminMain;
