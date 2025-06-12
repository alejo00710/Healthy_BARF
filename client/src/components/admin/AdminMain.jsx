import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/admin/admin.module.css";

const AdminMain = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
        return (
            <>
                <main className={styles["main-content"]}>
                    <div className={styles["content-header"]}>
                        <button onClick={handleBack} className={styles.backButton}>
                            &lt; Volver
                        </button>
                        <div className={styles["header-actions"]}>
                            <button className={styles["create-btn"]} id="createItemBtn">Crear Item</button>
                        </div>
                    </div>

                    <div className={`${styles.error} ${styles.hidden}`} id="errorMessage"></div>

                    <div className={styles["products-container"]}>
                        <div className={styles["products-header"]}>Productos</div>

                        <div className={`${styles.loading} ${styles.hidden}`} id="loading">
                            Cargando productos...
                        </div>

                        <table className={styles["products-table"]} id="productsTable">
                            <thead className={styles["table-header"]}>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre producto</th>
                                    <th>Descripción</th>
                                    <th>Unidad</th>
                                    <th>Precio</th>
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tbody id="productsTableBody">{/* Aquí se insertarán los productos */}</tbody>
                        </table>
                    </div>
                </main>

                <div className={`${styles["modal-overlay"]} ${styles.hidden}`} id="modalOverlay">
                    <div className={styles.modal}>
                        <div className={styles["modal-header"]}>
                            <h2 className={styles["modal-title"]}>Agregar materia prima</h2>
                            <button className={styles["close-btn"]} id="closeModalBtn">✕</button>
                        </div>

                        <form id="productForm">
                            <div className={styles["form-grid"]}>
                                <div className={styles["form-group"]}>
                                    <input
                                        type="text"
                                        className={styles["form-input"]}
                                        placeholder="Nombre producto*"
                                        id="productName"
                                        required
                                    />
                                </div>
                                <div className={styles["form-group"]}>
                                    <input
                                        type="date"
                                        className={styles["form-input"]}
                                        placeholder="Fecha vencimiento"
                                        id="expiryDate"
                                    />
                                </div>
                            </div>

                            <div className={styles["form-grid"]}>
                                <div className={styles["form-group"]}>
                                    <input
                                        type="number"
                                        className={styles["form-input"]}
                                        placeholder="Cantidad*"
                                        id="quantity"
                                        required
                                    />
                                </div>
                                <div className={styles["form-group"]}>
                                    <input
                                        type="text"
                                        className={styles["form-input"]}
                                        placeholder="Descripción"
                                        id="description"
                                    />
                                </div>
                            </div>

                            <div className={styles["form-grid"]}>
                                <div className={styles["form-group"]}>
                                    <input
                                        type="number"
                                        className={styles["form-input"]}
                                        placeholder="Precio*"
                                        id="price"
                                        required
                                    />
                                </div>
                                <div className={styles["form-group"]}>
                                    <input
                                        type="text"
                                        className={styles["form-input"]}
                                        placeholder="Tipo Material"
                                        id="material"
                                    />
                                </div>
                            </div>

                            <div className={styles["image-upload-area"]}>
                                <label className={styles["image-label"]}>Imagen del producto</label>
                                <div className={styles["image-dropzone"]} id="imageDropzone">
                                    <div id="imageUploadArea">
                                        <div className={styles["upload-icon"]}>📷</div>
                                        <p className={styles["upload-text"]}>
                                            Selecciona una imagen del producto
                                        </p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className={styles["file-input"]}
                                            id="imageInput"
                                        />
                                        <label htmlFor="imageInput" className={styles["upload-btn"]}>
                                            Subir imagen
                                        </label>
                                    </div>

                                    <div
                                        className={`${styles["image-preview"]} ${styles.hidden}`}
                                        id="imagePreview"
                                    >
                                        <img
                                            className={styles["preview-image"]}
                                            id="previewImage"
                                            alt="Preview"
                                        />
                                        <button
                                            type="button"
                                            className={styles["remove-image-btn"]}
                                            id="removeImageBtn"
                                        >
                                            Eliminar imagen
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={styles["submit-btn"]}
                                id="submitBtn"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    };

    export default AdminMain;
