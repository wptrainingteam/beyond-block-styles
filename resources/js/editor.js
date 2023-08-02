// Internal dependencies.
import SeparatorIconControl from './control-icons';

// WordPress dependencies.
import { BlockControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';

const withSeparatorIcons = ( BlockEdit ) => ( props ) => {
	return 'core/separator' === props.name ? (
		<>
			<BlockEdit { ...props } />
			<BlockControls group="other">
				<SeparatorIconControl
					attributes={ props.attributes }
					setAttributes={ props.setAttributes }
				/>
			</BlockControls>
		</>
	) : (
		<BlockEdit { ...props } />
	);
};

addFilter(
	'editor.BlockEdit',
	'theme-slug/separator-icons',
	withSeparatorIcons
);
