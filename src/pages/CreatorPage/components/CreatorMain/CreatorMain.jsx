import React from 'react';
import './CreatorMain.css';

import WorkoutDay from '../WorkoutDay/WorkoutDay';
import AddDayModal from '../AddDayModal/AddDayModal';

export default function CreatorMain() {
  // TODO: Hacer que esto use todos los elementos que hay dentro de el dialog
  /* 
  https://codi.link/PGRpYWxvZz4KICA8ZGl2IGNsYXNzPSJtb2RhbC1jb250ZW50Ij4KICAgIDxoMz5BZ3JlZ2FyIGRpYTwvaDM+CiAgICA8bGFiZWwgZm9yPSJkYXktbmFtZSI+Tm9tYnJlOjwvbGFiZWw+CiAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZGF5LW5hbWUiIGlkPSJkYXktbmFtZSI+CiAgICA8bGFiZWwgZm9yPSJ3ZWUtZGF5Ij5EaWEgZGUgbGEgc2VtYW5hOjwvbGFiZWw+CiAgICA8c2VsZWN0IG5hbWU9IndlZWstZGF5IiBpZD0id2Vlay1kYXkiPgogICAgICA8b3B0aW9uIHZhbHVlPSJMdW5lcyI+THVuZXM8L29wdGlvbj4KICAgICAgPG9wdGlvbiB2YWx1ZT0iTWFydGVzIj5NYXJ0ZXM8L29wdGlvbj4KICAgICAgPG9wdGlvbiB2YWx1ZT0iTWllcmNvbGVzIj5NaWVyY29sZXM8L29wdGlvbj4KICAgICAgPG9wdGlvbiB2YWx1ZT0iSnVldmVzIj5KdWV2ZXM8L29wdGlvbj4KICAgICAgPG9wdGlvbiB2YWx1ZT0iVmllcm5lcyI+Vmllcm5lczwvb3B0aW9uPgogICAgICA8b3B0aW9uIHZhbHVlPSJTYWJhZG8iPlNhYmFkbzwvb3B0aW9uPgogICAgICA8b3B0aW9uIHZhbHVlPSJEb21pbmdvIj5Eb21pbmdvPC9vcHRpb24+CiAgICA8L3NlbGVjdD4KICAgIDxkaXYgY2xhc3M9Im1vZGFsLWJ1dHRvbnMtY29udGFpbmVyIj4KICAgICAgPGJ1dHRvbiBpZD0iY2FuY2VsIiBjbGFzcz0iY2FuY2VsYXIiPkNhbmNlbGFyPC9idXR0b24+CiAgICAgIDxidXR0b24gaWQ9ImNhbmNlbCIgY2xhc3M9ImFncmVnYXIiPkFncmVnYXI8L2J1dHRvbj4KICAgIDwvZGl2PgogIDwvZGl2Pgo8L2RpYWxvZz4KCjxidXR0b24gaWQ9InNob3ciIGNsYXNzPSJzaG93Ij5BYnJpciBtb2RhbDwvYnV0dG9uPg==%7CKiB7CiAgbWFyZ2luOiAwOwogIHBhZGRpbmc6IDA7Cn0KCmJvZHkgewogIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWYKfQoKZGlhbG9nIHsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2NGY1OwogIGJvcmRlcjogbm9uZTsKICBib3JkZXItcmFkaXVzOiAxcmVtOwogIG1hcmdpbjogYXV0bzsKICBwYWRkaW5nOiAxcmVtIDJyZW07Cn0KCmRpYWxvZyAubW9kYWwtY29udGVudHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgZ2FwOiAxcmVtOwp9CgpkaWFsb2cgaDMgewogIGNvbG9yOiAjZmZmOwogIHRleHQtYWxpZ246IGNlbnRlcjsKfQpkaWFsb2cgbGFiZWwgewogIGNvbG9yOiAjZmZmOwp9CgpkaWFsb2cgaW5wdXQsCmRpYWxvZyBzZWxlY3QgewogIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgYm9yZGVyLXJhZGl1czogMXJlbTsKICBib3JkZXI6IG5vbmU7Cn0KCmRpYWxvZyAubW9kYWwtYnV0dG9ucy1jb250YWluZXIgewogIGRpc3BsYXk6IGZsZXg7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIGdhcDogMXJlbTsKICBtYXJnaW4tdG9wOiAuNXJlbTsKfQoKZGlhbG9nIGJ1dHRvbi5jYW5jZWxhciB7CiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOwogIGNvbG9yOiAjZmZmOwp9CmRpYWxvZyBidXR0b24gewogIGJvcmRlcjogbm9uZTsKICBwYWRkaW5nOiAuNXJlbSAxcmVtOwogIGJvcmRlci1yYWRpdXM6IDFyZW07CiAgd2lkdGg6IDEwMHB4Owp9%7CY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7CmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpOwpjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2FuY2VsJyk7CmNvbnN0IHNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdycpOwoKc2hvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICBzZXRUaW1lb3V0KCgpID0+IAogIGRpYWxvZy5zaG93TW9kYWwoKSwgMTAwKQp9KTsKY2FuY2VsLmZvckVhY2goZWxlbSA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlhbG9nLmNsb3NlKCkpKTsKCndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHsKICBldmVudC50YXJnZXQgIT09IGRpYWxvZ0NvbnRlbnQgJiYgZGlhbG9nLm9wZW4gJiYgZGlhbG9nLmNsb3NlKCk7Cn0p
   */
  // useEffect(() => {
  //   const dialog = document.querySelector('dialog');
  //   const dialogContent = document.querySelector('.modal-content');
  //   window.addEventListener('click', event => {
  //     event.target !== dialogContent && dialog.open && dialog.close();
  //   });
  // }, []);

  const handleShowModal = () => {
    const dialog = document.querySelector('dialog');
    setTimeout(() => dialog.showModal(), 100);
  };

  return (
    <main className="creator-main">
      <div className="creator-title-btn-container">
        <h2 className="creator-title">
          Here, you can create your workout by adding days and adding exercises
          at this days.
        </h2>
        <div className="btn-container">
          <button
            className="btn-creator app-btn-primary"
            onClick={handleShowModal}>
            Add day
          </button>
        </div>
        <AddDayModal />
      </div>

      <div class="workout-days">
        <WorkoutDay />
        <WorkoutDay />
        <WorkoutDay />
      </div>
    </main>
  );
}
