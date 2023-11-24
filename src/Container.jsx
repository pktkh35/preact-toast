import { useToastContainer } from "./hooks/useContainer";
import { Toast } from "./components/Toast";

const Container = () => {
    const { getToastToRender, updateHeightToast, calculateOffset } = useToastContainer({
        position: 'top-right',
        duration: 5000,
        role: 'alert',
        theme: 'light',
        limit: 15
    });

    return getToastToRender((position, toastList) => {
        return <div
            className={`athens-container athens-${position}`}
            key={`container-${position}`}
        >
            {
                toastList.map((t) => ({ ...t, offset: calculateOffset(t) })).map((toastProps, i) => {
                    return <Toast
                        {...toastProps}
                        key={`toast-${toastProps.key}`}
                        updateHeightToast={updateHeightToast}
                    />
                })
            }
        </div>
    })
}

export default Container