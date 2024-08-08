/// <amd-module name="@scom/scom-post/global/interface.ts" />
declare module "@scom/scom-post/global/interface.ts" {
    export interface IAuthor {
        id: string;
        username: string;
        description: string;
        avatar: string;
        npub?: string;
        displayName?: string;
        internetIdentifier: string;
    }
    export interface IPost {
        id: string;
        author: IAuthor;
        parentAuthor?: IAuthor;
        publishDate: Date | string;
        stats?: IPostStats;
        contentElements: IPostData[];
        repost?: IAuthor;
        community?: ICommunity;
        actions?: IPostActions;
        isPublicPost?: boolean;
        isLocked?: boolean;
    }
    export interface IPostStats {
        replies?: number;
        reposts?: number;
        upvotes?: number;
        downvotes?: number;
        views?: number;
        satszapped?: number;
        status?: string;
    }
    export interface IPostActions {
        liked?: boolean;
        replied?: boolean;
        reposted?: boolean;
        zapped?: boolean;
        bookmarked?: boolean;
    }
    export interface IPostData {
        module: string;
        category?: "widget" | "quotedPost";
        data: any;
    }
    enum ProtectedMembershipPolicyType {
        TokenExclusive = "TokenExclusive",
        Whitelist = "Whitelist"
    }
    enum TokenType {
        ERC20 = "ERC20",
        ERC721 = "ERC721",
        ERC1155 = "ERC1155"
    }
    interface IProtectedMembershipPolicy {
        policyType: ProtectedMembershipPolicyType;
        chainId?: number;
        tokenAddress?: string;
        tokenType?: TokenType;
        tokenId?: number;
        tokenAmount?: string;
        memberIds?: string[];
    }
    export interface ICommunity {
        communityUri?: string;
        creatorId?: string;
        communityId?: string;
        privateRelay?: string;
        parentCommunityUri?: string;
        isExclusive?: boolean;
        isWhitelist?: boolean;
        policies?: IProtectedMembershipPolicy[];
    }
    export interface ILinkPreview {
        url: string;
        title?: string;
        description?: string;
        image?: string;
        og_tags?: string[][];
        fc_tags?: string[][];
        sc_tags?: string[][];
    }
    export interface IShopifyFrame {
        title: string;
        description?: string;
        image: string;
        price: string;
        currency?: string;
        url: string;
    }
    type FrameButtonActionType = 'post' | 'post_redirect' | 'link' | 'mint' | 'tx';
    export interface IFrameButton {
        action: FrameButtonActionType;
        caption: string;
        target?: string;
        post_url?: string;
    }
    export interface IFarcasterFrame {
        image: string;
        post_url?: string;
        buttons?: IFrameButton[];
        input_text?: string;
        aspect_ratio?: string;
        state?: string;
        url: string;
    }
}
/// <amd-module name="@scom/scom-post/store/index.ts" />
declare module "@scom/scom-post/store/index.ts" {
    export const state: {
        ipfsGatewayUrl: string;
    };
    export const setDataFromJson: (options: any) => void;
    export const setIPFSGatewayUrl: (url: string) => void;
    export const getIPFSGatewayUrl: () => string;
}
/// <amd-module name="@scom/scom-post/global/utils.ts" />
declare module "@scom/scom-post/global/utils.ts" {
    const getImageIpfsUrl: (url: string) => string;
    const formatNumber: (value: number | string, decimal?: number) => string;
    const getDuration: (date: Date | string) => string;
    export { getImageIpfsUrl, formatNumber, getDuration };
}
/// <amd-module name="@scom/scom-post/global/index.ts" />
declare module "@scom/scom-post/global/index.ts" {
    import { Control } from '@ijstech/components';
    import { ILinkPreview, IPostData } from "@scom/scom-post/global/interface.ts";
    export * from "@scom/scom-post/global/utils.ts";
    export * from "@scom/scom-post/global/interface.ts";
    export const MAX_HEIGHT = 352;
    export const getEmbedElement: (postData: IPostData, parent: Control, callback?: any) => Promise<any>;
    export const getLinkPreview: (apiBaseUrl: string, url: string) => Promise<ILinkPreview | undefined>;
    export const getDomain: (url: string) => string;
}
/// <amd-module name="@scom/scom-post/index.css.ts" />
declare module "@scom/scom-post/index.css.ts" {
    export const getIconStyleClass: (color: string) => string;
    export const hoverStyle: string;
    export const ellipsisStyle: string;
    export const maxHeightStyle: string;
    export const customLinkStyle: string;
    export const cardContentStyle: string;
    export const linkPreviewImageStyle: string;
    export const labelHoverStyle: string;
}
/// <amd-module name="@scom/scom-post/assets.ts" />
declare module "@scom/scom-post/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-post/components/index.css.ts" />
declare module "@scom/scom-post/components/index.css.ts" {
    export const tooltipStyle: string;
    export const getImageStyle: (aspectRatio: string) => string;
    export const domainLinkStyle: string;
}
/// <amd-module name="@scom/scom-post/components/bubbleMenu.tsx" />
declare module "@scom/scom-post/components/bubbleMenu.tsx" {
    import { Control, ControlElement, Module } from '@ijstech/components';
    interface ScomPostBubbleMenuElement extends ControlElement {
        items?: IItem[];
    }
    interface IItem {
        icon: any;
        tooltipText?: string;
        onClick?: (target: Control, event: Event) => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post--bubble-menu']: ScomPostBubbleMenuElement;
            }
        }
    }
    export class ScomPostBubbleMenu extends Module {
        private pnlItems;
        private _items;
        get items(): IItem[];
        set items(value: IItem[]);
        setData(items: IItem[]): void;
        getData(): IItem[];
        renderUI(): void;
        init(): void;
        render(): void;
    }
}
/// <amd-module name="@scom/scom-post/components/linkPreview.tsx" />
declare module "@scom/scom-post/components/linkPreview.tsx" {
    import { ControlElement, Module } from '@ijstech/components';
    import { ILinkPreview } from "@scom/scom-post/global/index.ts";
    interface ScomPostLinkPreviewElement extends ControlElement {
        data?: ILinkPreview;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post--link-preview']: ScomPostLinkPreviewElement;
            }
        }
    }
    export class ScomPostLinkPreview extends Module {
        private imgPreview;
        private lblTitle;
        private lblDesc;
        private lblDomain;
        private _data;
        set data(value: ILinkPreview);
        private handleLinkPreviewClick;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-post/components/frames/shopify.tsx" />
declare module "@scom/scom-post/components/frames/shopify.tsx" {
    import { ControlElement, Module } from '@ijstech/components';
    import { IShopifyFrame } from "@scom/scom-post/global/index.ts";
    interface ScomPostShopifyFrameElement extends ControlElement {
        data?: IShopifyFrame;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post--frames-shopify']: ScomPostShopifyFrameElement;
            }
        }
    }
    export class ScomPostShopifyFrame extends Module {
        private imgProduct;
        private lblTitle;
        private lblPrice;
        private lblDesc;
        private lblDomain;
        private _data;
        set data(value: IShopifyFrame);
        handleButtonClick(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-post/components/frames/farcaster.tsx" />
declare module "@scom/scom-post/components/frames/farcaster.tsx" {
    import { ControlElement, Module } from '@ijstech/components';
    import { IFarcasterFrame } from "@scom/scom-post/global/index.ts";
    interface ScomPostFarcasterFrameElement extends ControlElement {
        data?: IFarcasterFrame;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post--frames-farcaster']: ScomPostFarcasterFrameElement;
            }
        }
    }
    export class ScomPostFarcasterFrame extends Module {
        private imgFrame;
        private pnlControls;
        private inputFrame;
        private pnlButtons;
        private lblDomain;
        private imageStyle;
        private _data;
        set data(value: IFarcasterFrame);
        private updateFrame;
        private renderButtons;
        private handleImageClick;
        private handleButtonClick;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-post/components/frames/index.ts" />
declare module "@scom/scom-post/components/frames/index.ts" {
    export { ScomPostShopifyFrame } from "@scom/scom-post/components/frames/shopify.tsx";
    export { ScomPostFarcasterFrame } from "@scom/scom-post/components/frames/farcaster.tsx";
}
/// <amd-module name="@scom/scom-post/components/index.ts" />
declare module "@scom/scom-post/components/index.ts" {
    export { ScomPostBubbleMenu } from "@scom/scom-post/components/bubbleMenu.tsx";
    export { ScomPostLinkPreview } from "@scom/scom-post/components/linkPreview.tsx";
    export * from "@scom/scom-post/components/frames/index.ts";
}
/// <amd-module name="@scom/scom-post" />
declare module "@scom/scom-post" {
    import { ControlElement, Module, Container, Control, VStack } from '@ijstech/components';
    import { IPost, IPostData, IPostStats, IAuthor } from "@scom/scom-post/global/index.ts";
    export { IPost, IPostData, IPostStats, IAuthor };
    interface ScomPostElement extends ControlElement {
        data?: IPost;
        type?: PostType;
        isActive?: boolean;
        onReplyClicked?: callbackType;
        onZapClicked?: callbackType;
        onLikeClicked?: (target: ScomPost, event?: MouseEvent) => void;
        onRepostClicked?: (target: ScomPost, event?: MouseEvent) => void;
        onProfileClicked?: callbackType;
        onQuotedPostClicked?: (target: ScomPost, event?: MouseEvent) => void;
        onBookmarkClicked?: callbackType;
        onCommunityClicked?: callbackType;
        onUnlockPostClicked?: asyncCallbackType;
        disableGutters?: boolean;
        limitHeight?: boolean;
        isReply?: boolean;
        overflowEllipse?: boolean;
        isPinned?: boolean;
        pinView?: boolean;
        apiBaseUrl?: string;
        isPublicPostLabelShown?: boolean;
        lazyLoad?: boolean;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-post']: ScomPostElement;
            }
        }
    }
    interface IPostConfig {
        data?: IPost;
        type?: PostType;
        isActive?: boolean;
    }
    type PostType = 'full' | 'standard' | 'short' | 'quoted' | 'card';
    type callbackType = (target: Control, data: IPost, event?: Event, contentElement?: Control) => void;
    type asyncCallbackType = (target: Control, data: IPost, event?: Event, contentElement?: Control) => Promise<boolean>;
    export class ScomPost extends Module {
        private pnlInfo;
        private pnlPublicLabel;
        private imgAvatar;
        private lblOwner;
        private lblUsername;
        private lblStatus;
        private lblDate;
        private imgVerified;
        private pnlQuoted;
        private btnShowMore;
        private showMoreWrapper;
        private btnShowMoreInWrapper;
        private pnlWrapper;
        private pnlMore;
        private pnlReply;
        private pnlReplies;
        private pnlGridPost;
        private pnlPinned;
        private pnlRepost;
        private pnlCommunity;
        private gridPost;
        private pnlPost;
        private btnViewMore;
        private pnlDetail;
        private pnlOverlay;
        private pnlLocked;
        private btnUnlockPost;
        private groupAnalysis;
        private pnlActiveBd;
        private pnlContent;
        private pnlReplyPath;
        private lbReplyTo;
        private pnlSubscribe;
        private bubbleMenu;
        private pnlCardContentBlock;
        private markdownViewer;
        private disableGutters;
        private limitHeight;
        private isReply;
        private overflowEllipse;
        private expanded;
        private _isPinned;
        private pinView;
        private _apiBaseUrl;
        private _isPublicPostLabelShown;
        private _data;
        private _replies;
        onReplyClicked: callbackType;
        onZapClicked: callbackType;
        onLikeClicked: asyncCallbackType;
        onRepostClicked: callbackType;
        onProfileClicked: callbackType;
        onQuotedPostClicked: (target: ScomPost, event?: MouseEvent) => void;
        onBookmarkClicked: callbackType;
        onCommunityClicked: callbackType;
        onUnlockPostClicked: asyncCallbackType;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomPostElement, parent?: Container): Promise<ScomPost>;
        get isActive(): boolean;
        set isActive(value: boolean);
        get type(): PostType;
        set type(value: PostType);
        get postData(): IPost;
        set postData(value: IPost);
        setData(data: IPostConfig): Promise<void>;
        getData(): IPostConfig;
        get replies(): IPost[];
        get isQuotedPost(): boolean;
        get isPinned(): boolean;
        set isPinned(value: boolean);
        get apiBaseUrl(): string;
        set apiBaseUrl(value: string);
        get isPublicPostLabelShown(): boolean;
        set isPublicPostLabelShown(value: boolean);
        set status(value: string);
        clear(): void;
        private isMarkdown;
        private constructPostCard;
        private renderCardContent;
        private renderUI;
        private appendLabel;
        private constructFarcasterFrame;
        private constructShopifyFrame;
        private replaceLinkPreview;
        private addQuotedPost;
        private renderInfo;
        private renderPostType;
        private renderAnalytics;
        addReply(parentPostId: string, post: IPost): ScomPost;
        appendReplyPanel(): VStack;
        private renderReplies;
        private renderReply;
        appendShowMorePanel(): void;
        private onShowMore;
        private onProfileShown;
        private onViewMore;
        private onGoProfile;
        private onGoCommunity;
        private handleUnlockPost;
        init(): Promise<void>;
        private showBubbleMenu;
        private handleShowMoreClick;
        onHide(): void;
        render(): any;
    }
}
