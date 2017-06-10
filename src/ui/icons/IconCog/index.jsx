import { h } from 'preact';
import styles from './IconCog.css';

const IconCog = ({
	class: className,
	children,
}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      class={`${styles.this} ${className ? className : ''}`}
    >
        <path style="text-indent:0;text-transform:none;block-progression:tb" d="M42 14c-1.009.029-1.875.924-2 1.75l-.813 6.375a29.931 29.931 0 0 0-7.937 4.594l-5.906-2.5c-.887-.37-2.019.012-2.5.843l-8 13.875c-.487.83-.26 2.005.5 2.594l5.094 3.875C20.209 46.916 20 48.443 20 50c0 1.565.207 3.077.438 4.594l-5.094 3.875c-.76.589-.987 1.764-.5 2.593l8 13.875c.481.832 1.613 1.214 2.5.844l5.906-2.5c2.374 1.915 5.046 3.436 7.938 4.563L40 84.25c.121.961 1.031 1.757 2 1.75h16c.969.01 1.879-.789 2-1.75l.813-6.406c2.89-1.127 5.563-2.648 7.937-4.563l5.906 2.5c.887.37 2.019-.013 2.5-.844l8-13.875c.487-.829.26-2.004-.5-2.593l-5.094-3.875C79.793 53.077 80 51.565 80 50c0-1.557-.21-3.085-.438-4.594l5.094-3.875c.76-.589.987-1.764.5-2.594l-8-13.875c-.481-.83-1.613-1.213-2.5-.843l-5.906 2.5a29.931 29.931 0 0 0-7.938-4.594L60 15.75c-.121-.961-1.031-1.758-2-1.75H42zm1.781 4H56.22l.719 5.719c.105.74.661 1.398 1.374 1.625 3.304 1.114 6.314 2.898 8.876 5.156.56.493 1.406.632 2.093.344l5.313-2.25 6.25 10.812-4.594 3.469a2.045 2.045 0 0 0-.75 1.969c.329 1.646.5 3.39.5 5.156 0 1.766-.171 3.479-.5 5.125a2.047 2.047 0 0 0 .75 2l4.594 3.469-6.25 10.812-5.313-2.25a2.046 2.046 0 0 0-2.094.344 25.959 25.959 0 0 1-8.874 5.125 2.047 2.047 0 0 0-1.376 1.656L56.22 82H43.78l-.719-5.719a2.047 2.047 0 0 0-1.374-1.656 25.959 25.959 0 0 1-8.876-5.125 2.046 2.046 0 0 0-2.093-.344l-5.313 2.25-6.25-10.812 4.594-3.469a2.047 2.047 0 0 0 .75-2A26.122 26.122 0 0 1 24 50c0-1.766.171-3.51.5-5.156a2.045 2.045 0 0 0-.75-1.969l-4.594-3.469 6.25-10.812 5.313 2.25a2.046 2.046 0 0 0 2.093-.344c2.562-2.258 5.572-4.042 8.876-5.156a2.046 2.046 0 0 0 1.374-1.625l.72-5.719zM50 32c-9.917 0-18 8.082-18 18 0 9.917 8.083 18 18 18 9.918 0 18-8.083 18-18s-8.082-18-18-18zm0 4c7.756 0 14 6.244 14 14s-6.244 14-14 14-14-6.244-14-14 6.244-14 14-14z" overflow="visible" />
    </svg>
);

export default IconCog;
