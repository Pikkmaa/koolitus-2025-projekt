import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

function AddMerch() {
  const [merch, setMerch] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const titleRef = useRef();
  const priceRef = useRef();
  const sizesRef = useRef();
  const imageRef = useRef();
  const shopLinkRef = useRef();
  

  const merchUrl =
    "https://night-flies-page-default-rtdb.europe-west1.firebasedatabase.app/merch.json";

  useEffect(() => {
    fetch(merchUrl)
      .then((res) => res.json())
      .then((json) => setMerch(json || []));
  }, []);

  function syncToFirebase(updated) {
    fetch(merchUrl, { method: "PUT", body: JSON.stringify(updated) });
  }

  function remove(index) {
    const updated = merch.filter((_, i) => i !== index);
    setMerch(updated);
    syncToFirebase(updated);
    toast.success("Item removed");
  }

  function addMerch() {
    if (titleRef.current.value === "") {
      toast.error("Merch item must have a title");
      return;
    }
    if (priceRef.current.value === "") {
      toast.error("Price is mandatory");
      return;
    }

    const newItem = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      sizes: sizesRef.current.value.split(",").map((s) => s.trim()),
      image: imageRef.current.value,
      shopLink: shopLinkRef.current.value,
    };

    const updated = [...merch, newItem];
    setMerch(updated);
    syncToFirebase(updated);
    toast.success("Merch item added successfully!");
    clearForm();
  }

  function startEdit(index) {
    const item = merch[index];
    titleRef.current.value = item.title;
    priceRef.current.value = item.price;
    sizesRef.current.value = item.sizes.join(", ");
    imageRef.current.value = item.image;
    shopLinkRef.current.value = item.shopLink;
    setEditIndex(index);
  }

  function saveEdit() {
    if (editIndex === null) return;

    const updated = [...merch];
    updated[editIndex] = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      sizes: sizesRef.current.value.split(",").map((s) => s.trim()),
      image: imageRef.current.value,
      shopLink: shopLinkRef.current.value,
    };

    setMerch(updated);
    syncToFirebase(updated);
    toast.success("Item updated successfully!");
    clearForm();
    setEditIndex(null);
  }

  function cancelEdit() {
    clearForm();
    setEditIndex(null);
  }

  function clearForm() {
    titleRef.current.value = "";
    priceRef.current.value = "";
    sizesRef.current.value = "";
    imageRef.current.value = "";
    shopLinkRef.current.value = "";
  }

  return (
    <div>
      <br />
      <div className="form">
        <label>
          <strong>Title</strong>
        </label>
        <input ref={titleRef} type="text" />

        <label>
          <strong>Price (€)</strong>
        </label>
        <input ref={priceRef} type="number" step="0.01" />

        <label>
          <strong>Available sizes (comma separated)</strong>
        </label>
        <input ref={sizesRef} type="text" placeholder="S, M, L, XL" />

        <label>
          <strong>Image URL</strong>
        </label>
        <input ref={imageRef} type="text" />

        <label>
          <strong>Shop URL</strong>
        </label>
        <input ref={shopLinkRef} type="text" />

        {editIndex !== null ? (
          <>
            <button onClick={saveEdit}>
              <FaSave /> Save changes
            </button>
            <button onClick={cancelEdit}>
              <FaTimes /> Cancel
            </button>
          </>
        ) : (
          <button onClick={addMerch}>Add merch</button>
        )}
      </div>

      <div>Number of merch items: {merch.length}</div>
      <table className="form-tabel">
        <thead>
          <tr>
            <th>#</th>
            <th>Index</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sizes</th>
            <th>Image</th>
            <th>Shop</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {merch.map((item, index) => (
            <tr key={item.title + index}>
              <td>{index + 1}.</td>
              <td>{index}</td>
              <td>{item.title}</td>
              <td>{item.price} €</td>
              <td>{item.sizes.join(", ")}</td>
              <td>
                <img src={item.image} alt={item.title} width="50" />
              </td>
              <td>{item.shopLink}</td>
              <td>
                <button onClick={() => startEdit(index)}>
                  <FaEdit />
                </button>
              </td>
              <td>
                <button onClick={() => remove(index)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddMerch;
