// Internal dependencies.
import { ICONS } from './const';
import { getIconFromClassName, updateIconClass } from './utils';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { starFilled } from '@wordpress/icons';

import {
	BaseControl,
	Button,
	Dropdown,
	ToolbarButton,
	__experimentalGrid as Grid
} from '@wordpress/components';

export default ( { attributes: { className }, setAttributes } ) => {

	// Get the current icon.
	const currentIcon = getIconFromClassName( className );

	// Update the icon class and gradient.
	const onIconButtonClick = ( icon ) => setAttributes( {
		className: updateIconClass(
			className,
			currentIcon === icon.value ? '' : icon.value,
			currentIcon
		),
		gradient: currentIcon === icon.value || ! icon?.gradient
			? undefined
			: icon?.gradient
	} );

	// Builds a menu item for an icon.
	const iconButton = ( icon, index ) => (
		<Button
			key={ index }
			isPressed={ currentIcon === icon.value }
			className="theme-slug-sep-icons-picker__button"
			onClick={ () => onIconButtonClick( icon ) }
		>
			{ icon.icon ?? icon.value }
		</Button>
	);

	// Builds an icon picker in a 6-column grid.
	const iconPicker = (
		<BaseControl
			className="theme-slug-sep-icons-picker"
			label={ __( 'Icons', 'theme-slug' ) }
		>
			<div className="theme-slug-sep-icons-picker__description">
				{ __( 'Pick an icon to super-charge your separator.', 'theme-slug' ) }
			</div>
			<Grid className="theme-slug-sep-icons-picker__grid" columns="6">
				{ ICONS.map( ( icon, index ) =>
					iconButton( icon, index )
				) }
			</Grid>
		</BaseControl>
	);

	// Returns the dropdown menu item.
	return (
		<Dropdown
			className="theme-slug-sep-icons-dropdown"
			contentClassName="theme-slug-sep-icons-popover"
			popoverProps={ {
				headerTitle: __( 'Separator Icons', 'theme-slug' ),
				variant: 'toolbar'
			} }
			renderToggle={ ( { isOpen, onToggle } ) => (
				<ToolbarButton
					className="theme-slug-sep-icons-dropdown__button"
					icon={ starFilled }
					label={ __( 'Separator Icon', 'theme-slug' ) }
					onClick={ onToggle }
					aria-expanded={ isOpen }
					isPressed={ !! currentIcon }
				/>
			) }
			renderContent={ () => iconPicker }
		/>
	);
};
