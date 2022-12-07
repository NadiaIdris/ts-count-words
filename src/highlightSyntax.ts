enum Style {
  Bold = "bold",
  None = "none",
}
type StyledText = [string, Style.Bold | Style.None];

export const highlightSyntax = (content: string): StyledText[] => {
  //
};
