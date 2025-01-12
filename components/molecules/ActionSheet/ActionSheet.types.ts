export interface ActionSheetProps {
    title: string;
    triggerElement: React.ReactNode;
    options: Array<{ id: number, label: string }>;
    onPress: (option: { id: number, label: string }) => void;
}