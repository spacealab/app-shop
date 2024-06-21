


// export function useOverlay(onClick: () => void, isOverflowHidden: boolean = false): void {
//     useEffect(() => {
//         const clickHandler = (): void => {
//             onClick();
//         };
//         document.addEventListener('click', clickHandler);
//         return (): void => {
//             document.removeEventListener('click', clickHandler);
//         };
//     }, []);

//     useEffect(() => {
//         if (isOverflowHidden) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//         return (): void => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isOverflowHidden]);
// }