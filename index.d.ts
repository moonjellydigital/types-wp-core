/** Post types included in core. */
export type corePostType = 'page' | 'post';

/**
 * Block types included in core.
 *
 * This type was generated from version 3 of the theme.json schema.
 *
 * @see {@link https://schemas.wp.org/trunk/theme.json}
 */
export type coreBlock =
  | 'core/archives'
  | 'core/audio'
  | 'core/avatar'
  | 'core/block'
  | 'core/button'
  | 'core/buttons'
  | 'core/calendar'
  | 'core/categories'
  | 'core/code'
  | 'core/column'
  | 'core/columns'
  | 'core/comment-author-avatar'
  | 'core/comment-author-name'
  | 'core/comment-content'
  | 'core/comment-date'
  | 'core/comment-edit-link'
  | 'core/comment-reply-link'
  | 'core/comments'
  | 'core/comments-pagination'
  | 'core/comments-pagination-next'
  | 'core/comments-pagination-numbers'
  | 'core/comments-pagination-previous'
  | 'core/comments-title'
  | 'core/comment-template'
  | 'core/cover'
  | 'core/details'
  | 'core/embed'
  | 'core/file'
  | 'core/freeform'
  | 'core/gallery'
  | 'core/group'
  | 'core/heading'
  | 'core/home-link'
  | 'core/html'
  | 'core/image'
  | 'core/latest-comments'
  | 'core/latest-posts'
  | 'core/list'
  | 'core/list-item'
  | 'core/loginout'
  | 'core/media-text'
  | 'core/missing'
  | 'core/more'
  | 'core/navigation'
  | 'core/navigation-link'
  | 'core/navigation-submenu'
  | 'core/nextpage'
  | 'core/page-list'
  | 'core/page-list-item'
  | 'core/paragraph'
  | 'core/post-author'
  | 'core/post-author-biography'
  | 'core/post-author-name'
  | 'core/post-comment'
  | 'core/post-comments-count'
  | 'core/post-comments-form'
  | 'core/post-comments-link'
  | 'core/post-content'
  | 'core/post-date'
  | 'core/post-excerpt'
  | 'core/post-featured-image'
  | 'core/post-navigation-link'
  | 'core/post-template'
  | 'core/post-terms'
  | 'core/post-time-to-read'
  | 'core/post-title'
  | 'core/preformatted'
  | 'core/pullquote'
  | 'core/query'
  | 'core/query-no-results'
  | 'core/query-pagination'
  | 'core/query-pagination-next'
  | 'core/query-pagination-numbers'
  | 'core/query-pagination-previous'
  | 'core/query-title'
  | 'core/quote'
  | 'core/read-more'
  | 'core/rss'
  | 'core/search'
  | 'core/separator'
  | 'core/shortcode'
  | 'core/site-logo'
  | 'core/site-tagline'
  | 'core/site-title'
  | 'core/social-link'
  | 'core/social-links'
  | 'core/spacer'
  | 'core/table'
  | 'core/table-of-contents'
  | 'core/tag-cloud'
  | 'core/template-part'
  | 'core/term-description'
  | 'core/text-columns'
  | 'core/verse'
  | 'core/video'
  | 'core/widget-area'
  | 'core/legacy-widget'
  | 'core/widget-group';

/**
 * Block pattern categories core registers by default.
 *
 * NOTE: The 'audio' and 'video' categories are only available in 6.4+. Prefer 'posts' over 'query'.
 *
 * @see {@link https://developer.wordpress.org/themes/patterns/registering-patterns/#pattern-categories}
 */
export type corePatternCategory =
  | 'featured'
  | 'about'
  | 'audio'
  | 'banner'
  | 'buttons'
  | 'call-to-action'
  | 'columns'
  | 'contact'
  | 'footer'
  | 'gallery'
  | 'header'
  | 'media'
  | 'portfolio'
  | 'posts'
  | 'query'
  | 'services'
  | 'team'
  | 'testimonials'
  | 'text'
  | 'video';

/**
 * Core template types that aren't suffixed (suffixed templates include a $slug, $term, post $id, etc.).
 *
 * @see {@link https://developer.wordpress.org/themes/basics/template-hierarchy/}
 */
export type coreTemplate =
  | '404'
  | 'archive'
  | 'attachment'
  | 'author'
  | 'category'
  | 'date'
  | 'front-page'
  | 'home'
  | 'index'
  | 'page'
  | 'search'
  | 'single'
  | 'single-post'
  | 'singular'
  | 'taxonomy';

/**
 * Keys for block pattern file headers.
 *
 * @see {@link https://developer.wordpress.org/themes/patterns/registering-patterns/#using-the-patterns-directory-to-register-patterns}
 */
export type patternFileHeaderKey =
  | 'Title'
  | 'Slug'
  | 'Categories'
  | 'Description'
  | 'Viewport Width'
  | 'Inserter'
  | 'Keywords'
  | 'Block Types'
  | 'Post Types'
  | 'Template Types';
